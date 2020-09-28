import { LocationModel } from './location.model';
import { DetailsModel } from './details.model';
import { accountDetailsModel } from './accountDetails.model';

export class PublishListingModel {
    
     public LocationModel: LocationModel;
    public DetailsModel: DetailsModel;
    public accountDetailsModel: accountDetailsModel;





    "ownerId": string;
    "correlationid": string;
    "location":LocationModel;
    "details":DetailsModel;
    "accountDetails":accountDetailsModel;



}
