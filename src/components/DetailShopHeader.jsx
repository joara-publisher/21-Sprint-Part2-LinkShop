import emptyLike from "../assets/img/empty_likes.png";
import fullLike from "../assets/img/full_likes.png";
import shareIcon from "../assets/img/share.png";

function DetailShopHeader({
  shopImage,
  shopName,
  userId,
  likes,
  isLiked,
  onLikeClick,
  onShareClick,
  onEditClick,
  onDeleteClick,
}) {
  return (
    <section>
      {/* 좋아요 버튼 */}
      <button onClick={onLikeClick}>
        <img src={isLiked ? fullLike : emptyLike} alt="좋아요" />
        <span>{likes}</span>
      </button>

      {/* 상점 정보 */}
      <div>
        <img src={shopImage} alt="상점 이미지" />
        <h1>{shopName}</h1>
        <p>@{userId}</p>
      </div>

      {/* 액션 버튼 */}
      <button>
        <img src={shareIcon} alt="공유하기 버튼" />
      </button>
      <div>
        <button onClick={onEditClick}>수정</button>
        <button onClick={onDeleteClick}>삭제</button>
      </div>
    </section>
  );
}

export default DetailShopHeader;
