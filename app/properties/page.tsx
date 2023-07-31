import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import EmptyState from "../components/EmptyState";
import Properties from "./Properties";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please log in" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return (
    <div>
      <Properties currentUser={currentUser} listings={listings} />
    </div>
  );
};

export default PropertiesPage;
