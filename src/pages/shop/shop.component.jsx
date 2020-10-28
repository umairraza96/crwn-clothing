import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
