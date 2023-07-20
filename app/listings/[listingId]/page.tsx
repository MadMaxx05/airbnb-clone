import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "@/app/components/EmptyState";
import Listing from "./Listing";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const listing = await getListingById(params);
  const reservations = await getReservations(params);

  if (!listing) return <EmptyState />;

  return (
    <Listing
      currentUser={currentUser}
      listing={listing}
      reservations={reservations}
    />
  );
};

export default ListingPage;
