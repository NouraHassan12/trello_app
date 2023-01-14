import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from "../TrelloList/TrelloList";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import TrelloCreate from "../TrelloForm/TrelloCreate";
import { sort, setActiveBoard } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrelloBoard = ({ lists, cards, boards, sort }) => {
  const { boardID } = useParams();
  const dispatch = useDispatch();
  const board = boards[boardID];
  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  }, []);
  if (!board) {
    return <p>Board not found</p>;
  }
  const listOrder = board.lists;
  console.log(listOrder, "listOrder123");

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map((cardID) => cards[cardID]);

                  return (
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <TrelloCreate list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
});

export default connect(mapStateToProps, { sort, setActiveBoard })(TrelloBoard);
