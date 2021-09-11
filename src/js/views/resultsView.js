import PreviewView from './previewView';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No search results found with that query. Please try again!';
  _message = '';
}
export default new ResultsView();
