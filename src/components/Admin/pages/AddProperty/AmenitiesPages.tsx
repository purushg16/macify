import AmenitiesGrid from "../../elements/AddProperty/AmenitiesGrid";
import AddTitle from "../../elements/AddTitle";

const AmenitiesPages = () => {
  return (
    <>
      <AmenitiesGrid />

      <AddTitle
        heading="Choose Amenities"
        subtitle="Select all the amenities available "
      />
    </>
  );
};

export default AmenitiesPages;
