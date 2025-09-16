import Link from "next/link";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryOverlay,
  StoryVideo,
} from "@/components/ui/stories";

import { IconArrowUpRight } from "@/assets/icons/arrow";

import { stories } from "@/data/stories";

export const Videos = () => {
  return (
    <section className="py-9">
      <div className="container">
        <Badge>
          <BadgeDot /> Expert Videos
        </Badge>
        <div className="mt-6 mb-12 flex gap-3 max-sm:flex-col md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance font-semibold text-5xl text-primary">Learn, Grow, Transform</h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Watch expert insights and practical strategies to grow your business.
            </p>
          </div>

          <Button asChild className="justify-between gap-3 pr-1.5" size="lg">
            <Link aria-label="Explore all BizDoctor videos" href={"/"}>
              Explore all video
              <div className="flex size-7 items-center justify-center rounded bg-primary-300 text-primary">
                <IconArrowUpRight />
              </div>
            </Link>
          </Button>
        </div>

        <Stories className="w-full">
          <StoriesContent className="w-full gap-48">
            {stories.map((story) => (
              <Story className="aspect-3/4 w-48" key={story.id}>
                <StoryVideo src={story.video} />
                <StoryOverlay />
                <StoryAuthor>
                  <StoryAuthorImage fallback={story.fallback} name={story.author} src={story.avatar} />
                  <StoryAuthorName>{story.author}</StoryAuthorName>
                </StoryAuthor>
              </Story>
            ))}
          </StoriesContent>
        </Stories>
      </div>
    </section>
  );
};
