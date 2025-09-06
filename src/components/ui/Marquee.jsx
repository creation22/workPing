import React from "react";
import { cn } from "../../lib/utils";
import { Marquee } from "../../components/magicui/marquee";

const reviews = [
  { 
    name: "Sarah Chen", 
    username: "@sarah_dev", 
    body: "WorkPing has been a game-changer! My family finally knows when I'm working and stops calling during important meetings. The setup was super easy!", 
    img: "https://avatar.vercel.sh/sarah" 
  },
  { 
    name: "Mike Rodriguez", 
    username: "@mike_remote", 
    body: "As a remote worker, this extension is perfect. My wife can see when I'm in deep work mode and respects my focus time. Highly recommend!", 
    img: "https://avatar.vercel.sh/mike" 
  },
  { 
    name: "Emily Johnson", 
    username: "@emily_tech", 
    body: "Finally, a solution that keeps my family connected without being intrusive. The Telegram integration is seamless and the privacy features are excellent.", 
    img: "https://avatar.vercel.sh/emily" 
  },
  { 
    name: "David Park", 
    username: "@david_startup", 
    body: "WorkPing solved the constant 'are you working?' texts from my family. Now they know my status automatically. Simple and effective!", 
    img: "https://avatar.vercel.sh/david" 
  },
  { 
    name: "Lisa Wang", 
    username: "@lisa_designer", 
    body: "This extension is brilliant! My parents in another timezone can see when I'm working without disturbing me. The UI is clean and intuitive.", 
    img: "https://avatar.vercel.sh/lisa" 
  },
  { 
    name: "Alex Thompson", 
    username: "@alex_freelance", 
    body: "WorkPing has eliminated so much stress from my work-life balance. My family understands my schedule better and I can focus on work without interruptions.", 
    img: "https://avatar.vercel.sh/alex" 
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
