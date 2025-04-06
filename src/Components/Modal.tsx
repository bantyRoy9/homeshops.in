import { IconClose } from "../Assests/Icons";
import { memo } from "react";
import { FormModalPropsType } from "../Utils/Const";

const FormModal = ({headerTitle,modalSize = "md",btnTitle = "Submit",onSubmit,children,fontWeight = "",closeModal,name = "",className = "",btnVisible = true}: FormModalPropsType) => {
  const renderChildren = () => (
    <>
      <div className="pb-6" style={{ maxHeight: '78vh', overflow: 'auto' }}>
        {children}
      </div>
      {btnVisible && (
        <div className="modal-footer">
          <button className="btn btn-sm-primary" type="submit">
            {btnTitle}
          </button>
        </div>
      )}
    </>
  );

  const modalContent = onSubmit ? (
    <form className="modal-body pb-0" onSubmit={onSubmit}>
      {renderChildren()}
    </form>
  ) : (
    <div className="modal-body pb-0">
      {renderChildren()}
    </div>
  );

  return (
    <div className={`modal-backdrop ${className}`}>
      <div className={`main-modal ${modalSize}-modal`}>
        <div className="modal-header">
          <h3 className={`heading-sm-semibold flex-1 ${fontWeight}`}>
            {headerTitle}
          </h3>
          <button type="button" onClick={() => closeModal(name)}>
            <IconClose />
          </button>
        </div>
        {modalContent}
      </div>
    </div>
  );
};

export default memo(FormModal);
