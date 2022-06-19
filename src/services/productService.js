import serviceCallApi from "./ServicesCallAPI";


const listProductAPI = async () => {
  try {
    const result = await serviceCallApi("products?page=1&limit=10&id=2", "GET");
    return result.data.data.data;
  } catch (error) {
    return error.message;
  }
};
export { listProductAPI };
