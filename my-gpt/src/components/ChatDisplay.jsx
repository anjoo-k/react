import React from 'react'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'
import { Space, Avatar, Card } from 'antd'


const ChatDisplay = ({chatDataList, isLoading}) => {
  return (

    <ChatContainer>
        {
            chatDataList.map((chat, index) => (
                <div key={index}>
                    <Space>
                        <Avatar size={40}>GILDONG</Avatar>
                        <Card
                            style={{
                                width:300
                            }}
                            bodyStyle={{
                                padding: "12px"
                            }}>
                            {chat.question}
                        </Card>
                    </Space>
                    <RequestArea>
                        <Space>
                            <Card
                                style={{
                                    width:300
                                }}
                                bodyStyle={{
                                    padding: "12px"
                                }}>
                                {chat.message}
                            </Card>
                            <Avatar size={40}
                                    src={"https://flexible.img.hani.co.kr/flexible/normal/970/777/imgdb/resize/2019/0926/00501881_20190926.JPG"}
                            />
                        </Space>
                    </RequestArea>

                </div>
            ))
        }
    
        { isLoading &&
            <div>
              AI가 응답을 작성하고있습니다
              <LoadingOutlined />
            </div>
        }
        </ChatContainer>


  )
}

export default ChatDisplay

const RequestArea = styled.div`
    float: right;
    
`
const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
`