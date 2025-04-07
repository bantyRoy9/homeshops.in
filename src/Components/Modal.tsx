import { IconClose } from "../Assests/Icons";
import { memo } from "react";
import { FormModalPropsType } from "../Utils/Const";

const FormModal = ({isOpen,header,modalSize = "md",btn = "Submit",onSubmit,children,closeModal,name = ""}: FormModalPropsType) => {
  const renderChildren = () => (
    <>
      <div className="pb-6" style={{ maxHeight: '78vh', overflow: 'auto' }}>
        {children}
      </div>
      <div className="modal-footer">
        <button className="btn btn-sm-primary" type="submit">
          {btn}
        </button>
      </div>
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
    <div className={isOpen?`modal-backdrop`:'hidden'}>
      <div className={`main-modal ${modalSize}-modal`}>
        <div className="modal-header">
          <h3 className={`heading-sm-semibold flex-1`}>
            {header}
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
