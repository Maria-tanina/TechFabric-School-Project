import {
  AuthorRulesWrapper,
  RulesHeader,
  RulesList,
  RulesListItem,
} from "@components/AuthorRules/style";

export const AuthorRules = () => {
  return (
    <AuthorRulesWrapper>
      <RulesHeader>A few tips on how to create an article:</RulesHeader>
      <RulesList>
        <RulesListItem>
          <strong>Know your audience: </strong>Understand who your target
          audience is and tailor your content to their interests, preferences,
          and needs. This will help you connect with your readers on a deeper
          level.
        </RulesListItem>
        <RulesListItem>
          <strong>Craft a compelling headline:</strong>Your headline is the
          first thing readers see, so make it attention-grabbing and relevant to
          the content. A strong headline can entice users to click and read your
          post.
        </RulesListItem>
        <RulesListItem>
          <strong>Start with a hook: </strong> Begin your post with a
          captivating introduction that immediately captures the reader's
          attention. Whether it's a thought-provoking question, a fascinating
          anecdote, or a surprising statistic, the hook should create curiosity
          and encourage them to keep reading.
        </RulesListItem>
        <RulesListItem>
          <strong>Structure your content:</strong>Organize your blog post into
          clear sections with subheadings. This helps readers skim the content
          easily and find what they're looking for. Use bullet points, lists,
          and visuals to enhance readability.
        </RulesListItem>
        <RulesListItem>
          <strong>Focus on quality over quantity:</strong>It's better to create
          valuable and insightful content rather than lengthy, wordy posts. Aim
          to provide useful information, practical tips, or entertaining stories
          that resonate with your audience.
        </RulesListItem>
        <RulesListItem>
          <strong>Use visuals:</strong> Incorporate relevant images,
          infographics, or videos to make your blog post visually appealing and
          engaging. Visuals can help break up text and convey information more
          effectively.
        </RulesListItem>
        <RulesListItem>
          <strong>Keep it concise:</strong>Be clear and concise in your writing.
          Avoid unnecessary jargon or complicated language. Keep paragraphs and
          sentences relatively short to maintain reader interest.
        </RulesListItem>
        <RulesListItem>
          <strong>Use a conversational tone:</strong>Write as if you're having a
          conversation with your readers. Avoid being overly formal and use a
          friendly, approachable tone that matches your brand or personality.
        </RulesListItem>
      </RulesList>
    </AuthorRulesWrapper>
  );
};
