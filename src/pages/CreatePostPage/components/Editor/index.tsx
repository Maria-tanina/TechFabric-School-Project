import { ChangeEvent, SyntheticEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import {
  clearAllFields,
  clearImage,
  setContent,
  setDataField,
  setDescription,
  setImage,
  setShowPreview,
  setTags,
  setTitle,
  setType,
  toggleShowPreview,
} from "@features/article/articleSlice";
import {
  selectArticleContent,
  selectArticleImage,
  selectArticleTags,
  selectArticleType,
  selectArticleTitle,
  selectShowPreview,
  selectArticleDescription,
} from "@features/article/articleSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import "react-quill/dist/quill.snow.css";
import { ArticlePreview } from "@components/ArticlePreview";
import {
  useCreateDraftArticleMutation,
  usePublishArticleMutation,
} from "@services/articlesApi";
import { selectUserId, selectUserIsAdmin } from "@services/authSelectors";
import { useNotification } from "@hooks/useNotification";
import { HOME_PATH, MY_ARTICLES_PATH } from "@constants/paths";
import { FieldsWrapper, HiddenFileInput, SecondText } from "./style";
import { SecondButton } from "@components/SecondButton";
import { fileToBase64 } from "@helpers/fileToBase64";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FilePreview } from "@pages/CreatePostPage/components/FilePreview";
import { ArticleInput, SmallArticleInput } from "@components/ArticleInput";
import TagsSelect from "@components/TagsSelect";
import { StyledTagsSelect } from "@components/TagsSelect/style";
import {
  atLeastOneItemIsMissing,
  selectUniqueItems,
} from "@helpers/selectUniqueItems";
import { selectSportTypesData } from "@services/articlesSelectors";
import { getErrorMessage } from "@helpers/errorHandlers";
import { ICreatePostFormValues } from "./types";
import { tagsOptions } from "./tags";
import createPostValidationSchema from "./createPostValidationSchema";
import {
  ButtonsWrapper,
  FlexWrapper,
  StyledEditorWrapper,
  StyledReactQuill,
  StyledTopEditor,
} from "./style";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { IArticle, IUpdateArticleProps } from "@customTypes/articleTypes";

const Editor = ({
  articleData,
  onSubmitUpdate,
}: {
  articleData?: IArticle;
  onSubmitUpdate?: (updatedData: IUpdateArticleProps) => void;
}) => {
  const [createDraftArticle] = useCreateDraftArticleMutation();

  const [publishArticle] = usePublishArticleMutation();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const content = useAppSelector(selectArticleContent);

  const showPreviewArticle = useAppSelector(selectShowPreview);

  const image = useAppSelector(selectArticleImage);

  const title = useAppSelector(selectArticleTitle);

  const description = useAppSelector(selectArticleDescription);

  const tags = useAppSelector(selectArticleTags);

  const types = useAppSelector(selectSportTypesData);

  const sportType = useAppSelector(selectArticleType);

  const author = useAppSelector(selectUserId);

  const userIsAdmin = useAppSelector(selectUserIsAdmin);

  const { showNotification } = useNotification();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const articleForPreview = {
    image,
    title,
    tags,
    type: sportType,
    content,
  };

  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold"],
      ["italic"],
      ["link"],
      [{ list: "bullet" }],
      ["blockquote"],
      ["image"],
    ],
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm<ICreatePostFormValues>({
    defaultValues: {
      title: "",
      sport: "",
      description: "",
    },
    mode: "all",
    resolver: yupResolver(createPostValidationSchema),
  });

  useEffect(() => {
    if (articleData) {
      dispatch(setDataField(articleData));
      setValue("title", articleData.title);
      setValue("sport", articleData.sport);
      setValue("description", articleData.description);
    } else {
      dispatch(clearAllFields());
      dispatch(setShowPreview(false));
    }
  }, [articleData]);

  const handleEditorChange = (value: string) => {
    dispatch(setContent(value));
  };

  const clearSelectedFiles = () => {
    dispatch(clearImage());
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  const handleChangeTags = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | string[] | null
  ) => {
    if (Array.isArray(newValue)) {
      if (newValue.length <= 5) {
        const newTags = newValue.map((tag) => {
          tag = tag[0] === "#" ? tag : `#${tag}`;
          return tag;
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
    }
  };

  const handleChangeType = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | string[] | null
  ) => {
    if (typeof newValue === "string") {
      dispatch(setType(newValue));
    } else if (!newValue) {
      dispatch(setType(""));
    }
  };

  const onSelectFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileInfo =
        file.type.indexOf("image") > -1 ? await fileToBase64(file) : "";
      dispatch(setImage(fileInfo));
    }
  };

  const handlePreviewButtonClick = () => {
    dispatch(toggleShowPreview());
    window.scrollTo(0, 0);
  };

  const onSubmit = async (createPostData: ICreatePostFormValues) => {
    if (image) {
      const article = {
        ...createPostData,
        tags,
        author: author as string,
        content,
        image,
      };

      if (!!articleData && onSubmitUpdate) {
        onSubmitUpdate(article);
        return;
      }

      try {
        await createDraftArticle(article).unwrap();
        dispatch(clearAllFields());
        showNotification("Your draft was created", "success");
        navigate(MY_ARTICLES_PATH);
      } catch (error) {
        showNotification(
          getErrorMessage((error as FetchBaseQueryError).data) ||
            "Some error occurred...",
          "error"
        );
      }
    } else {
      showNotification("Add image to your article", "error");
    }
  };

  const handlePublishArticle = () => {
    if (articleData?.id) {
      try {
        publishArticle({
          articleId: articleData.id,
        }).unwrap();
        showNotification("Post was published!", "success");
        navigate(HOME_PATH);
      } catch (error) {
        showNotification(
          getErrorMessage((error as FetchBaseQueryError).data) ||
            "Some error occurred...",
          "error"
        );
      }
    }
  };

  return (
    <StyledEditorWrapper onSubmit={handleSubmit(onSubmit)}>
      {showPreviewArticle ? (
        <ArticlePreview article={articleForPreview} />
      ) : (
        <>
          <StyledTopEditor>
            <FlexWrapper>
              <SecondButton $width="40%" sx={{ flexShrink: 0 }} type="button">
                Add Cover Image
                <HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                  onChange={onSelectFiles}
                />
              </SecondButton>

              {image ? (
                <FilePreview
                  url={image}
                  clearSelectedFiles={clearSelectedFiles}
                />
              ) : (
                <SecondText>
                  Make sure you use an image of the right size and proportion:
                  use a 100:42 ratio for best results.
                </SecondText>
              )}
            </FlexWrapper>

            <FieldsWrapper>
              <ArticleInput
                type="text"
                {...register("title")}
                value={title}
                placeholder="Enter the title..."
                onChange={handleChangeTitle}
                error={!!errors.title?.message}
                helperText={errors.title?.message}
              />

              <SmallArticleInput
                type="text"
                {...register("description")}
                value={description}
                placeholder="Enter the description..."
                onChange={handleChangeDescription}
                error={!!errors.description?.message}
                helperText={errors.description?.message}
              />

              <TagsSelect
                options={tagsOptions}
                value={tags || null}
                onChange={handleChangeTags}
                freeSolo
                multiple
                title="Top Tags:"
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
                options={types || []}
                value={sportType || null}
                onChange={handleChangeType}
                title="Top sports"
                renderInput={(params) => (
                  <StyledTagsSelect
                    {...params}
                    placeholder={sportType ? "" : "Start enter the type..."}
                    {...register("sport")}
                    error={!!errors.sport?.message}
                    helperText={errors.sport?.message}
                    InputProps={{
                      ...params.InputProps,
                    }}
                  />
                )}
              />
            </FieldsWrapper>
          </StyledTopEditor>

          <StyledReactQuill
            theme="snow"
            value={content}
            onChange={handleEditorChange}
            modules={modules}
            placeholder="Write your article content here..."
          />
        </>
      )}
      {!!articleData ? (
        <ButtonsWrapper>
          {userIsAdmin ? (
            <OutlinedButton
              $width="240px"
              type="button"
              onClick={handlePublishArticle}
            >
              Publish article
            </OutlinedButton>
          ) : null}

          <OutlinedButton $width="240px" type="submit">
            Update article
          </OutlinedButton>
          <GhostButton
            $width="240px"
            onClick={handlePreviewButtonClick}
            type="button"
          >
            {showPreviewArticle ? "Edit Article" : "Preview Article"}
          </GhostButton>
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <OutlinedButton $width="240px" type="submit">
            Create article
          </OutlinedButton>
          <GhostButton
            $width="240px"
            onClick={handlePreviewButtonClick}
            type="button"
          >
            {showPreviewArticle ? "Edit Article" : "Preview Article"}
          </GhostButton>
        </ButtonsWrapper>
      )}
    </StyledEditorWrapper>
  );
};

export default Editor;
