import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllStores, searchStores } from '../../actions/actionApi'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import SearchNav from '../../components/SearchNav'
import slug from 'slug'
import './index.css'

class StoreList extends Component {

    componentDidMount() {
        this.fetchStores()
        this.fetchStoresByName = this.fetchStoresByName.bind(this)
    }

    fetchStores() {
        const { getAllStores } = this.props
        getAllStores()
    }

    fetchStoresByName(query) {
        if (query) {
            const { searchStores } = this.props
            searchStores(query)
        } else {
            this.fetchStores()
        }
    }

    render() {
        const { isFetching, stores } = this.props
        return (
            <div>
                <SearchNav 
                    className="store-search-bar" 
                    placeholder="Search for Restaurant or Cuisine"
                    onSearch={this.fetchStoresByName} />
                <Container>
                    <Row>
                        <Col sm={{ size: 12 }}>
                            <div className="store-list-container">
                                {isFetching && (
                                    <ReactLoading className="store-list-loading" type={'spin'} color={'#000'} width={64} height={64} delay={0} />
                                )}
                                {!isFetching && stores.map(store => (
                                    <Link className="store-list-item" key={store.id} to={`/${store.id}/${slug(store.name)}`}>
                                        <div className="store-item-image">
                                            <img alt="store" src="http://via.placeholder.com/70x70" />
                                        </div>
                                        <div className="store-item-info">
                                            <span className="store-item-name">{store.name}</span>
                                            <span className="store-item-address">{store.address}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

StoreList.propTypes = {
    stores: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getAllStores: PropTypes.func.isRequired,
    searchStores: PropTypes.func.isRequired
}

const mapStateToProps = ({ stores }) => ({
    isFetching: stores.isFetching,
    stores: [...stores.items]
})

const mapDispatchToProps = dispatch => ({
    getAllStores: () => dispatch(getAllStores()),
    searchStores: query => dispatch(searchStores(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreList)
