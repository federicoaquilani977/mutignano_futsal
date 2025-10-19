import Hero from "@/components/sections/Hero"; // manteniamo il tuo hero
import OverviewHub from "@/components/sections/OverviewHub";
import SquadSpotlight from "@/components/sections/SquadSpotlight";
import NewsMosaic from "@/components/sections/NewsMosaic";
import SponsorsStrip from "@/components/sections/SponsorsStrip";
import DualCTA from "@/components/sections/DualCTA";
import TopStories from "@/components/sections/TopStories";
import ActionRail from "@/components/sections/ActionRail";
import VideoRail from "@/components/sections/VideoRail";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopStories />
      <VideoRail />
      <ActionRail />
      <OverviewHub />
      <SquadSpotlight />
      <NewsMosaic />
      <SponsorsStrip />
      <DualCTA />
    </>
  );
}
