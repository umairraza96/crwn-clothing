import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot=null
  componentDidMount() {
    const collectionRef = firestore.collection("collections")
    collectionRef.onSnapshot(async (snapshot)=>convertCollectionsSnapshotToMap(snapshot))
  }
  render () {
    const {match} =this.props
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
          />
      </div>
    )
  }

}

export default ShopPage;
