import EarlyAccess from "@/components/ui/waitlist-01-utils/waitlist";

const avatarList = [
  {
    image:
      "https://cdn.21st.dev/assets/localized/c5ee2e124ea7334450d30a46607f793534f567e97d4b708cda110a06aeed4953.webp",
    fallback: "JD",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/a14cfb79930752b101d94f18e1d60c337367589ea223dffaa62884aa579dcb65.webp",
    fallback: "SK",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/b539abc60701ab9cbcd73f9241d13a14a09582a4fd06c65784cb5567d77a2e0e.webp",
    fallback: "ML",
  },
];

const EarlyAccess01 = () => {
  return <EarlyAccess avatarList={avatarList} />;
};

export default EarlyAccess01;
