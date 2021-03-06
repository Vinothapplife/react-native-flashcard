export const LOADING_DECKS = 'LOADING_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
import * as API from '../utils/api';

export const loadingDecks = decks => {
  return {
    type: LOADING_DECKS,
    decks
  };
};

export const addNewDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  };
};

export const updateDeck = deck => ({
  type: UPDATE_DECK,
  updatedDeck: {
    [deck.title]: deck
  }
});

export const newDeck = title => {
  const deck = {
    title,
    questions: []
  };

  return updateDeck(deck);
};
