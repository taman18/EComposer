import { BsLightningFill } from "react-icons/bs";
import Stars from "../../../../../components/common/Stars";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import QuantitySelector from "./QuantitySelector";
import { BraceletCustomizerProps } from "./BraceletCustomizerWithDetails.types";



const BraceletCustomizerWithDetails: React.FC<BraceletCustomizerProps> = ({
  ratingCount,
  productTitle,
  isOutOfStock,
  currentPrice,
  originalPrice,
  viewersCount,
  beadOptions,
  colorAndSizeOptions,
  engravingDetails,
}) => {
  return (
    <>
      <section className="px-10">
        <div className="flex items-center pb-5 md:justify-start justify-center">
          <Stars count={5} color="brown" />
          <p className="font-medium">({ratingCount}+ rating)</p>
        </div>

        <div className="pb-5 flex justify-center">
          <p className="md:text-3xl text-2xl text-wrap md:text-left text-center font-medium">
            {productTitle}
          </p>
        </div>

        <div className="flex items-center pb-5 md:justify-start justify-center">
          <BsLightningFill fill={isOutOfStock ? "green" : "red"} size={20} />
          <p className={`text-[green] font-medium`}>{isOutOfStock ? "Outstock" : "In Stock"}</p>
        </div>

        <div className="flex items-center pb-5 md:justify-start justify-center">
          <h2 className="text-2xl font-medium mr-1 text-wrap">${currentPrice} </h2>
          <h4 className="line-through text-[#BCBCBC] text-xl font-medium ml-1 text-wrap">
            ${originalPrice}
          </h4>
        </div>

        <div className="flex items-center pb-5 md:justify-start justify-center">
          <IoEyeSharp fill="#1D24BF" size={20} />
          <p className="text-[#1D24BF] ml-2">{viewersCount} people viewing this product right now</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <form className="max-w-sm flex flex-col md:items-start items-center">
            <label htmlFor="beads" className="font-medium">
              Beads Number:
            </label>
            <select
              id="beads"
              className="bg-white border border-black text-black text-sm w-full max-w-[200px] rounded-3xl block w-full p-4 my-2"
            >
              {beadOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <form className="max-w-sm flex flex-col md:items-start items-center">
            <label htmlFor="color-size" className="font-medium">
              Bracelet color & Wrist size:
            </label>
            <select
              id="color-size"
              className="bg-white border border-black text-black text-sm w-full max-w-[200px] rounded-3xl block w-full p-4 my-2"
            >
              {colorAndSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div>
          <h3 className="font-medium py-3 md:text-left text-center">Add your personalization</h3>
          <p className="md:text-left text-center">Engraving Information:</p>
          {engravingDetails.map((detail, index) => (
            <span
              key={index}
              className="flex items-center md:justify-start justify-center my-1"
            >
              <IoMdHeart fill="red" size={20} />
              <p className="pl-2 md:text-left text-center">{detail}</p>
            </span>
          ))}
          <div className="py-5 flex md:justify-start justify-center">
            <textarea
              id="message"
              rows={3}
              cols={30}
              className="block p-2.5 text-sm text-black bg-white rounded-lg border border-gray-300"
              placeholder="Your Personalization"
            ></textarea>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start">
            <QuantitySelector />
            <button className="bg-[#CA2F2F] hover:bg-black w-[200px] text-white py-4 font-bold rounded-3xl md:ml-3 ml-0 md:mt-0 mt-3">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BraceletCustomizerWithDetails;
