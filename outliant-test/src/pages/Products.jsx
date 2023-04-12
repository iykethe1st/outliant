import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonPrimary from "../components/common/ButtonPrimary";
import ButtonSecondary from "../components/common/ButtonSecondary";

const Products = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //   handle Change

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name: name, price: price, index: items.length + 1 };
    setItems([...items, newItem]);
    setName("");
    setPrice("");
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex((item) => item.index === index);
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <header className="z-20 sticky top-0">
        <Navbar />
      </header>
      <div className="relative flex flex-col gap-16 py-8 ">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col px-4 md:px-[4rem] lg:px-[10rem] lg:w-[50rem] gap-8">
            <div className="flex gap-8 items-center justify-between">
              <h1 className="font-bold text-2xl md:text-3xl">Products</h1>
              {/* search */}
              <input
                type="text"
                placeholder="Search for keywords..."
                className="p-2 rounded focus:outline-none ring-1 ring-black"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            {/* Table */}
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-[#636262] text-left text-sm font-light border-2 border-black">
                      <thead className="bg-[#ECECEC] text-black font-medium ">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 border-r border-black"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 border-r border-black"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 border-r border-black"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredItems.map((item) => (
                          <tr
                            key={item.index}
                            className="border-b border-l border-black"
                          >
                            <td className="whitespace-nowrap px-6 py-4 border-r border-black">
                              {item.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 border-r border-black">
                              {item.price}
                            </td>
                            <td className="flex gap-2 px-2">
                              <ButtonPrimary label="Edit" />
                              <ButtonSecondary
                                onClick={() => handleDelete(item.index)}
                                label="Delete"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-[#ECECEC] flex flex-col items-center text-sm p-8 rounded gap-4 max-w-[25rem]">
              <h1 className="font-bold text-xl">Header Text</h1>
              <span className="px-8 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
              <div className="flex flex-col gap-4 w-4/5">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Name"
                  className="px-4 py-2 rounded"
                />
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="Price"
                  className="px-4 py-2 rounded"
                />
              </div>
              <ButtonPrimary label="Call to Action" />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
