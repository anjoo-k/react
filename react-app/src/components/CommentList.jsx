import React from 'react'
import Comment from './Comment';

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요. 홍길동입니다. 잘부탁드려요",
        path: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG"
    }, {
        name: "김효영",
        comment: "잘모르겠어요",
        path: "https://www.petpostnews.com/news/photo/202312/1700_2613_1045.jpg"
    }, {
        name: "김길동",
        comment: "화이팅 잘 해보세요",
        path: "https://s3.ap-northeast-2.amazonaws.com/img.stibee.com/21525_1635316506.jpg"
    },

]

const CommentList = () => {
  return (
    <div>
      {comments.map(comment => {
        return <Comment name={comment.name} comment={comment.comment} path={comment.path} />
      })}
    </div>
  )
}

export default CommentList
