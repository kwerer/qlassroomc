import { configureStore } from "@reduxjs/toolkit";
import changeTabSlice from "./ChangeTabs";
import questionNumberSlice from "./QuestionNumber";
import LearningJourneyProgressSlice, {
  Jan,
} from "./LearningJourney/LearningJourneyProgress";
import Topic11Slice from "./LearningJourney/Jan-Topics/Topic1";
import Topic12Slice from "./LearningJourney/Jan-Topics/Topic2";
import Topic13Slice from "./LearningJourney/Jan-Topics/Topic3";
import Topic14Slice from "./LearningJourney/Jan-Topics/Topic4";
import JanProgressSlice from "./LearningJourney/Jan-Topics/JanProgressBar";
import Topic21Slice from "./LearningJourney/Feb-Topics/Topic1";
import Topic22Slice from "./LearningJourney/Feb-Topics/Topic2";
import Topic23Slice from "./LearningJourney/Feb-Topics/Topic3";
import Topic24Slice from "./LearningJourney/Feb-Topics/Topic4";
import FebProgressSlice from "./LearningJourney/Feb-Topics/FebProgressBar";
import Topic31Slice from "./LearningJourney/Mar-Topics/Topic1";
import Topic32Slice from "./LearningJourney/Mar-Topics/Topic2";
import Topic33Slice from "./LearningJourney/Mar-Topics/Topic3";
import Topic34Slice from "./LearningJourney/Mar-Topics/Topic4";
import MarProgressSlice from "./LearningJourney/Mar-Topics/MarProgressBar";
import Topic41Slice from "./LearningJourney/Apr-Topics/Topic1";
import Topic42Slice from "./LearningJourney/Apr-Topics/Topic2";
import Topic43Slice from "./LearningJourney/Apr-Topics/Topic3";
import Topic44Slice from "./LearningJourney/Apr-Topics/Topic4";
import AprProgressSlice from "./LearningJourney/Apr-Topics/AprProgressBar";
import Topic51Slice from "./LearningJourney/May-Topics/Topic1";
import Topic52Slice from "./LearningJourney/May-Topics/Topic2";
import Topic53Slice from "./LearningJourney/May-Topics/Topic3";
import Topic54Slice from "./LearningJourney/May-Topics/Topic4";
import MayProgressSlice from "./LearningJourney/May-Topics/MayProgressBar";
import Topic61Slice from "./LearningJourney/Jun-Topics/Topic1";
import Topic62Slice from "./LearningJourney/Jun-Topics/Topic2";
import Topic63Slice from "./LearningJourney/Jun-Topics/Topic3";
import Topic64Slice from "./LearningJourney/Jun-Topics/Topic4";
import JunProgressSlice from "./LearningJourney/Jun-Topics/JunProgressBar";
import Topic71Slice from "./LearningJourney/Jul-Topics/Topic1";
import Topic72Slice from "./LearningJourney/Jul-Topics/Topic2";
import Topic73Slice from "./LearningJourney/Jul-Topics/Topic3";
import Topic74Slice from "./LearningJourney/Jul-Topics/Topic4";
import JulProgressSlice from "./LearningJourney/Jul-Topics/JulProgressBar";
import Topic81Slice from "./LearningJourney/Aug-Topics/Topic1";
import Topic82Slice from "./LearningJourney/Aug-Topics/Topic2";
import Topic83Slice from "./LearningJourney/Aug-Topics/Topic3";
import Topic84Slice from "./LearningJourney/Aug-Topics/Topic4";
import AugProgressSlice from "./LearningJourney/Aug-Topics/AugProgressBar";
import Topic91Slice from "./LearningJourney/Sep-Topics/Topic1";
import Topic92Slice from "./LearningJourney/Sep-Topics/Topic2";
import Topic93Slice from "./LearningJourney/Sep-Topics/Topic3";
import Topic94Slice from "./LearningJourney/Sep-Topics/Topic4";
import SepProgressSlice from "./LearningJourney/Sep-Topics/SepProgressBar";
import Topic101Slice from "./LearningJourney/Oct-Topics/Topic1";
import Topic102Slice from "./LearningJourney/Oct-Topics/Topic2";
import Topic103Slice from "./LearningJourney/Oct-Topics/Topic3";
import Topic104Slice from "./LearningJourney/Oct-Topics/Topic4";
import OctProgressSlice from "./LearningJourney/Oct-Topics/OctProgressBar";
import Topic111Slice from "./LearningJourney/Nov-Topics/Topic1";
import Topic112Slice from "./LearningJourney/Nov-Topics/Topic2";
import Topic113Slice from "./LearningJourney/Nov-Topics/Topic3";
import Topic114Slice from "./LearningJourney/Nov-Topics/Topic4";
import NovProgressSlice from "./LearningJourney/Nov-Topics/NovProgressBar";
import Topic121Slice from "./LearningJourney/Dec-Topics/Topic1";
import Topic122Slice from "./LearningJourney/Dec-Topics/Topic2";
import Topic123Slice from "./LearningJourney/Dec-Topics/Topic3";
import Topic124Slice from "./LearningJourney/Dec-Topics/Topic4";
import DecProgressSlice from "./LearningJourney/Dec-Topics/DecProgressBar";
import CurrentMonth from "./ReviewTab/CurrentMonth";
import CurrentDate from "./ReviewTab/CurrentDate";

export default configureStore({
  reducer: {
    questionNumber: questionNumberSlice,
    changeTabs: changeTabSlice,
    lJProgress: LearningJourneyProgressSlice,
    topic11: Topic11Slice,
    topic12: Topic12Slice,
    topic13: Topic13Slice,
    topic14: Topic14Slice,
    janProgressBar: JanProgressSlice,
    topic21: Topic21Slice,
    topic22: Topic22Slice,
    topic23: Topic23Slice,
    topic24: Topic24Slice,
    febProgressBar: FebProgressSlice,
    topic31: Topic31Slice,
    topic32: Topic32Slice,
    topic33: Topic33Slice,
    topic34: Topic34Slice,
    marProgressBar: MarProgressSlice,
    topic41: Topic41Slice,
    topic42: Topic42Slice,
    topic43: Topic43Slice,
    topic44: Topic44Slice,
    aprProgressBar: AprProgressSlice,
    topic51: Topic51Slice,
    topic52: Topic52Slice,
    topic53: Topic53Slice,
    topic54: Topic54Slice,
    mayProgressBar: MayProgressSlice,
    topic61: Topic61Slice,
    topic62: Topic62Slice,
    topic63: Topic63Slice,
    topic64: Topic64Slice,
    junProgressBar: JunProgressSlice,
    topic71: Topic71Slice,
    topic72: Topic72Slice,
    topic73: Topic73Slice,
    topic74: Topic74Slice,
    julProgressBar: JulProgressSlice,
    topic81: Topic81Slice,
    topic82: Topic82Slice,
    topic83: Topic83Slice,
    topic84: Topic84Slice,
    augProgressBar: AugProgressSlice,
    topic91: Topic91Slice,
    topic92: Topic92Slice,
    topic93: Topic93Slice,
    topic94: Topic94Slice,
    sepProgressBar: SepProgressSlice,
    topic101: Topic101Slice,
    topic102: Topic102Slice,
    topic103: Topic103Slice,
    topic104: Topic104Slice,
    octProgressBar: OctProgressSlice,
    topic111: Topic111Slice,
    topic112: Topic112Slice,
    topic113: Topic113Slice,
    topic114: Topic114Slice,
    novProgressBar: NovProgressSlice,
    topic121: Topic121Slice,
    topic122: Topic122Slice,
    topic123: Topic123Slice,
    topic124: Topic124Slice,
    decProgressBar: DecProgressSlice,
    CurrentMonth: CurrentMonth,
    CurrentDate: CurrentDate,
  },
});
