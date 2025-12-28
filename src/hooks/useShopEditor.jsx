const INITIAL_PRODUCT = {
  name: "",
  price: 0,
  imageUrl: "",
};

const INITIAL_LINK_SHOP_DATA = {
  currentPassword: "",
  userId: "",
  name: "",
  shop: {
    imageUrl: "",
    urlName: "",
    shopUrl: "",
  },
  products: [INITIAL_PRODUCT],
};

/**
 * 응집도
 * - 관련 있는 것들은 함께 두어라!
 *
 * 이 훅 안에는 샵 데이터를 활용해 API 요청을 보내는 로직들이 캡슐화 되어있다
 * - 샵 데이터 상태
 * - 샵 데이터 업데이트 함수들
 *
 * 다른 곳에서 샵 편집 또는 생성하는 기능이 필요하다면
 * 이 훅을 재사용할 수 있다
 */
export function useShopEditor(initialValues = INITIAL_LINK_SHOP_DATA) {
  const [linkShopData, setLinkShopData] = useState(initialValues);

  const updateLinkShopField = (field, value) => {
    setLinkShopData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateShopField = (field, value) => {
    setLinkShopData((prev) => ({
      ...prev,
      shop: {
        ...prev.shop,
        [field]: value,
      },
    }));
  };

  const updateProductField = (index, field, value) => {
    setLinkShopData((prev) => {
      const updatedProducts = [...prev.products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value,
      };
      return {
        ...prev,
        products: updatedProducts,
      };
    });
  };

  const handleAddProduct = () => {
    setLinkShopData((prev) => ({
      ...prev,
      products: [...prev.products, { name: "", price: 0, imageUrl: "" }],
    }));
  };

  return {
    linkShopData,
    updateLinkShopField,
    updateShopField,
    updateProductField,
    handleAddProduct,
  };
}
