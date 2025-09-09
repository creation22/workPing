import HeroVideoDialog from "../../components/magicui/hero-video-dialog";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/hxHRVaobt5k"
        thumbnailSrc="https://i.ibb.co/VYtyrGFp/Boost-Focus-With-Work-Ping-0a347c1b-aa40-4681-b765-2633dd5a334d.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/hxHRVaobt5k"
        thumbnailSrc="https://i.ibb.co/VYtyrGFp/Boost-Focus-With-Work-Ping-0a347c1b-aa40-4681-b765-2633dd5a334d.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
