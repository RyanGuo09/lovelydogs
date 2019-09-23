import _ from 'lodash';
export default function sortOnOptions(sortOrder, data) {
  switch (sortOrder) {
    case '$ - $$$':
      return _.sortBy(data, [
        // eslint-disable-next-line space-before-function-paren
        function(item) {
          return parseInt(item.price.replace(/\$/g, ''));
        }
      ]);
    default:
      return data;
  }
}
