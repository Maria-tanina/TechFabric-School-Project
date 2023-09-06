import { SecondButton } from "@components/SecondButton";
import {
  FieldsWrapper,
  FlexWrapper,
  SecondText,
  StyledTopEditor,
  HiddenFileInput,
} from "./style";
import { ChangeEvent, SyntheticEvent, useRef } from "react";
import { ArticleInput } from "@components/ArticleInput";
import TagsSelect from "@components/TagsSelect";
import { IOption } from "@components/TagsSelect/types";
import {
  selectArticleImage,
  selectArticleTags,
  selectArticleThemes,
  selectArticleTitle,
} from "@features/article/articleSelectors";
import {
  clearImage,
  setImage,
  setTags,
  setThemes,
  setTitle,
} from "@features/article/articleSlice";
import { tagsOptions } from "./tags";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { StyledTagsSelect } from "@components/TagsSelect/style";
import { useNotification } from "@hooks/useNotification";
import { fileToBase64 } from "@helpers/fileToBase64";
import { FilePreview } from "../FilePreview";
import { themesOptions } from "./themes";
import {
  atLeastOneItemIsMissing,
  selectUniqueItems,
} from "@helpers/selectUniqueItems";

export const TopEditor = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const image = useAppSelector(selectArticleImage);

  const title = useAppSelector(selectArticleTitle);

  const tags = useAppSelector(selectArticleTags);

  const themes = useAppSelector(selectArticleThemes);

  const dispatch = useAppDispatch();

  const { showNotification } = useNotification();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleChangeTags = (
    event: SyntheticEvent<Element, Event>,
    newValue: (IOption | string)[]
  ) => {
    if (newValue.length <= 5) {
      const newTags = newValue.map((tag) => {
        if (typeof tag === "string") {
          tag = tag[0] === "#" ? tag : `#${tag}`;
          return { title: tag };
        } else {
          return tag;
        }
      });

      const uniqueNewTags = selectUniqueItems(newTags, tags);

      if (uniqueNewTags.length) {
        dispatch(setTags(newTags));
      } else {
        const atLeastOneTagIsMissing = atLeastOneItemIsMissing(newTags, tags);

        if (atLeastOneTagIsMissing) {
          dispatch(setTags(newTags));
        } else {
          showNotification("This tag already exists", "error");
        }
      }
    } else {
      showNotification(
        "You can choose up to 5 tags. Please delete 1 tag to add another one.",
        "error"
      );
    }
  };

  const handleChangeThemes = (
    event: SyntheticEvent<Element, Event>,
    newValue: (IOption | string)[]
  ) => {
    const newThemes = newValue.map((theme) => {
      if (typeof theme === "string") {
        return { title: theme };
      } else {
        return theme;
      }
    });

    const uniqueNewThemes = selectUniqueItems(newThemes, themes);

    if (uniqueNewThemes.length) {
      dispatch(setThemes(newThemes));
    } else {
      const atLeastOneThemeIsMissing = atLeastOneItemIsMissing(
        newThemes,
        themes
      );

      if (atLeastOneThemeIsMissing) {
        dispatch(setThemes(newThemes));
      } else {
        showNotification("This theme already exists", "error");
      }
    }
  };

  const onSelectFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileInfo: { fileName: string; base64String: string } = {
        fileName: file.name,
        base64String:
          file.type.indexOf("image") > -1 ? await fileToBase64(file) : "",
      };
      dispatch(setImage(fileInfo));
    }
  };

  const clearSelectedFiles = () => {
    dispatch(clearImage());
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <StyledTopEditor>
      <FlexWrapper>
        <SecondButton $width="40%" sx={{ flexShrink: 0 }}>
          Add Cover Image
          <HiddenFileInput
            ref={fileInputRef}
            type="file"
            accept="image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
            onChange={onSelectFiles}
          />
        </SecondButton>
        {image.base64String ? (
          <FilePreview
            url={image.base64String}
            clearSelectedFiles={clearSelectedFiles}
          />
        ) : (
          <SecondText>
            Make sure you use an image of the right size and proportion: use a
            100:42 ratio for best results.
          </SecondText>
        )}
      </FlexWrapper>

      <FieldsWrapper>
        <ArticleInput
          type="text"
          value={title}
          placeholder="Enter the title..."
          onChange={handleChangeTitle}
        />

        <TagsSelect
          options={tagsOptions}
          title="Top Tags:"
          value={tags}
          onChange={handleChangeTags}
          renderInput={(params) => (
            <StyledTagsSelect
              {...params}
              placeholder={
                tags.length ? "" : "Add up to 5 tags to your article..."
              }
            />
          )}
        />

        <TagsSelect
          options={themesOptions}
          title="Top Themes:"
          value={themes}
          onChange={handleChangeThemes}
          renderInput={(params) => (
            <StyledTagsSelect
              {...params}
              placeholder={themes.length ? "" : "Start enter the theme..."}
            />
          )}
        />
      </FieldsWrapper>
    </StyledTopEditor>
  );
};
