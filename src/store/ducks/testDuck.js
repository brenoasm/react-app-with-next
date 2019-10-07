import { useCallback } from 'react';
import { createSelector } from 'reselect';
import { useDispatch } from 'react-redux';

const types = {};

export const useTestActions = () => {
  const dispatch = useDispatch();

  return {};
};

export const useTestSelectors = () => {
  const getTest = useCallback(
    createSelector(
      (state) => state.testState,
      (testState) => testState.test
    )
  );

  return { getTest };
};

export const initialState = {
  test: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
