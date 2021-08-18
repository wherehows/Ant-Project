const App = function({ $target, initialState }) {
  new MultiForm({
    $target,
    initialState,
    onSubmit: (text) => {
      alert('hi');
    }
  });
}