const EmbeddedMap = () => {
  return (
    <div className=" my-5 mb-10 w-[85%] mx-auto ">
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        src="https://www.openstreetmap.org/export/embed.html?bbox=-122.5149%2C37.7081%2C-122.3566%2C37.8324&layer=mapnik"
        title="Embedded OpenStreetMap"
        allowFullScreen
        className=" w-full"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
