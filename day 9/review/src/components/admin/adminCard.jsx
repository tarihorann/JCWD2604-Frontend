/** @format */

function AdminProductCard({ productName, price, img, edit, hapus }) {
  return (
    <tr className="text-center">
      <td>
        <img src={img} alt="" className=" w-24 object-cover" />
      </td>

      <td className="text-left">{productName}</td>
      <td className=" font-semibold">IDR {price.toLocaleString()}</td>
      <td className="flex gap-5 justify-center items-center h-[70px]">
        <button
          onClick={edit}
          className="h-[30px] border w-[72px] rounded-md text-white bg-black hover:bg-white border-black hover:text-black"
        >
          Edit
        </button>
        <button
          className="h-[30px] border w-[72px] rounded-md text-white bg-black hover:bg-white border-black hover:text-black"
          onClick={hapus}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default AdminProductCard;
