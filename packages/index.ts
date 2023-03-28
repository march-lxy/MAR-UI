import mButton from "./button/index";
import mInput from "./input/index";
import mTextarea from "./textarea/index";
import mSpace from "./space/index";
import mSelect from "./select/index";
import mRadio from "./radio/index";
import mTree from "./tree/index";
import { mIcon } from "./icon/index";
import mMessage from "./message/index";
import mTabs from "./tabs/index";
import mConfirm from "./confirm/index";
import mLoading from "./loading/index";

const components = [
  mButton,
  mInput,
  mTextarea,
  mSpace,
  mSelect,
  mRadio,
  mTree,
  mTabs,
  mIcon,
];
const install = (app:any) => {
  components.forEach((item) => {
    app.use(item);
  });
  app.config.globalProperties.$message = mMessage;
  app.config.globalProperties.$Confirm = mConfirm;
  app.config.globalProperties.$Loading = mLoading;
};
const MARUI = {
  install,
};
export {
  mButton,
  mInput,
  mTextarea,
  mSpace,
  mSelect,
  mRadio,
  mTree,
  mIcon,
  mMessage,
  mTabs,
  mConfirm,
  mLoading,
};
export default MARUI;
