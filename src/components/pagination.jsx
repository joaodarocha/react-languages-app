import React, { Component } from 'react';
import { Pagination} from 'semantic-ui-react';

export default class PaginationMenu extends Component {
  state = { activePage: 1 };


  render() {
    const { activePage, totalPages } = this.props;
    // console.log('Total Pages => ', totalPages);
    // console.log('Active Page => ', activePage);

    return (
      <Pagination
        activePage={ activePage }
        onPageChange={ this.props.paginationHandler }
        totalPages={ totalPages }
        nextItem={null}
        prevItem={null}
        firstItem={null}
        lastItem={null}
      />
    );
  }
}
