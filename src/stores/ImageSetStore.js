import BaseStore from './BaseStore';
import _ from 'lodash';


class ImageSetStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._imageSets = new Array();
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case 'IMAGE_RESULT_RECEIVED':
        //Check if search type is already in data:
        let inSet = false;
        this._imageSets.map( (imageSet) => {
          if (imageSet){
            if( imageSet.id == action.id ) //If it is, replace data:
              imageSet.data = action.data
            inSet = true;
          }
        } ); 
        //If its not, add new search type along with data:
        if(!inSet)
          this._imageSets.push({id: action.id, data: action.data});
        this._imageSets = _.compact(this._imageSets);
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get imageSets(){
    return this._imageSets;
  }
}

export default new ImageSetStore();