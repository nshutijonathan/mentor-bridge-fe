import ProfileSummary from "../components/Profile/ProfileSummary/ProfileSummary";
import BioSection from "../components/Profile/BioSection/BioSection";
import ProfileHeaderWithSearch from "../components/ProfileLayout/ProfileHeader/ProfileHeaderWithSearch/ProfileHeaderWithSearch";
import ProfileFooter from "../components/ProfileLayout/ProfileFooter/ProfileFooter";
import { userMock } from "../mocks/userMock";
function MenteeProfilePage() {
  return (
    <div
      style={{
        backgroundColor: "#fbfcfe",
        minHeight: "100vh",
      }}
    >
      <ProfileHeaderWithSearch />
      <ProfileSummary user={userMock} />
      <BioSection />
      <ProfileFooter />
    </div>
  );
}

export default MenteeProfilePage;
