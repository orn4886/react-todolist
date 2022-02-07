import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex : 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  /* background: gray;  사이즈 조정 확인용 임시 스타일 */
`;

function TodoList(){
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
      <TodoItem text="스타일링" done={true}></TodoItem>
      <TodoItem text="샤오롱바오 사기" done={false}></TodoItem>
      <TodoItem text="만찐두빵 만들기" done={true}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;