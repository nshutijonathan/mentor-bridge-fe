import ProfileSummary from "../components/Profile/ProfileSummary/ProfileSummary";
import BioSection from "../components/Profile/BioSection/BioSection";
import ProfileHeaderWithSearch from "../components/ProfileLayout/ProfileHeader/ProfileHeaderWithSearch/ProfileHeaderWithSearch";
import ProfileFooter from "../components/ProfileLayout/ProfileFooter/ProfileFooter";
import GuidanceNeeds from "../components/Mentee/GuidanceNeeds/GuidanceNeeds";
import LearningGoalsCard from "../components/Mentee/LearningGoals/LearningGoals";
import RequestsList from "../components/Requests/RequestsList";
function MenteeProfilePage() {
  return (
    <div
      style={{
        backgroundColor: "#f6f8f9",
        minHeight: "100vh",
      }}
    >
      <ProfileHeaderWithSearch />
      <ProfileSummary />
      <BioSection />
      <GuidanceNeeds />
      <LearningGoalsCard />
      <RequestsList />
      <ProfileFooter />
    </div>
  );
}

export default MenteeProfilePage;
