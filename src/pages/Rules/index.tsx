import { HomePageWrapper, RulesHeader, RulesParagraph } from "./style";
import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { MainContent } from "@components/MainContent";
import Logo from "@components/Logo";

const RulesPage = () => {
  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <RulesHeader>Rules of the Blog</RulesHeader>
        <RulesParagraph>
          <span>
            1) <strong>Respect for Participants: </strong> Please show respect
            to fellow participants of the blog. No insults, threats, or
            discrimination of any kind will be tolerated.{" "}
          </span>
          <span>
            2) <strong>Blog Topic: </strong> Post content that is relevant to
            the theme of the blog. If you want to share something unrelated to
            the main topic, please contact the administration.{" "}
          </span>
          <span>
            3) <strong>Copyright Rules: </strong> Only publish your own content
            or content for which you have the right. Provide proper attribution
            if you are using someone else's material.{" "}
          </span>
          <span>
            4) <strong>Spam and Self-Promotion: </strong> Spam and
            self-promotion are not allowed. If you have something of interest to
            our audience, contact the administration to discuss publication.{" "}
          </span>
          <span>
            5) <strong>Respect Privacy: </strong> Do not disclose the personal
            information of other users without their permission.{" "}
          </span>
          <span>
            6) <strong>Comments: </strong> Comment constructively and
            respectfully towards the author and other participants. Profanity
            and offensive statements are not allowed.{" "}
          </span>
          <span>
            7) <strong>Moderation and Administration: </strong> Decisions made
            by the blog's administration are final. If you have questions or
            issues, please contact the administration directly.{" "}
          </span>
          <span>
            8) <strong>Safety: </strong> Do not publish information that could
            put you or other blog participants in danger.{" "}
          </span>
          <span>
            9) <strong>Tag Usage: </strong> Use appropriate tags to help other
            participants find interesting content.{" "}
          </span>
          <span>
            10) <strong>Compliance with Laws: </strong> Comply with all
            applicable laws and regulations when creating and commenting on
            content. Unlawful actions may result in the suspension of your
            account.
          </span>
        </RulesParagraph>
        <RulesParagraph>
          Violation of these rules may lead to warnings, temporary account
          suspension, or permanent account deletion, depending on the severity
          of the violation. We aim to create a friendly and safe space for
          information exchange and discussions related to our blog's topic.
        </RulesParagraph>
        <RulesParagraph>
          In this lesson, you'll learn about the copyright protections that
          apply to work posted online. You'll learn about the rules that
          determine which images and text you can use, and how you can use them.
          You'll also learn how to protect the content you create.
        </RulesParagraph>
        <RulesHeader>
          User roles exist in <Logo />
        </RulesHeader>
        <RulesParagraph>
          There are four distinct user roles on PowerUP, each designed to offer
          specific capabilities:
        </RulesParagraph>
        <RulesParagraph>
          <span>
            1) <strong>Guest</strong> - Has read-only access, allowing them to
            view posts and comments made by others.
          </span>
          <span>
            2) <strong>User</strong> - an comment on posts, like them, and save
            posts to their favorites.
          </span>
          <span>
            3) <strong>Author</strong> - Has the ability to create new posts and
            edit their own previously written articles.
          </span>
          <span>
            4) <strong>Administrator</strong> - Possesses comprehensive control
            over the platform, including the ability to moderate articles,
            assign roles to users, and manage other platform-wide
            functionalities.
          </span>
        </RulesParagraph>
        <RulesParagraph>
          Blog Administrators can change user role for each user at any time and
          can also define a user role for each user when sending the invitation
          to new users to join the blog.
        </RulesParagraph>
      </MainContent>
    </HomePageWrapper>
  );
};

export default RulesPage;
