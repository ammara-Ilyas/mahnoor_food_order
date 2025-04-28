import Slider from "../miniWidgets/Slider";
export default function MenuSlide() {
  const sliderData = [
    {
      image: "/images/menu/menu-item-3.png",
      title: "Magnam Tiste",
      description: "Delicious Vietnamese spring rolls",
    },
    {
      image: "/images/menu/menu-item-2.png",
      title: "Est Eligendi",
      description: "Fresh summer rolls with shrimp",
    },
    {
      image: "/images/menu/menu-item-1.png",
      title: "Lorem Ipsum",
      description: "Savory fried rolls with crispy lettuce",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Featured menu</h1>
      <Slider sliderData={sliderData} initialIndex={0} />
    </div>
  );
}
