import { _birthdayMessages, _messages } from "../src/assets/mock/mock";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { _albums } from "./assets/mock/mock";
import { useModal } from "./hooks/useModal";
import { Header, MessageSection } from "./components/ui";
import { MemoryZone } from "./components/common";

function App() {
    const { isModalVisible, currentImage, openModal, closeModal } = useModal();

    const messageRef = useRef(null);
    const memoryZoneRef = useRef(null);

    const isInViewMessageRef = useInView(messageRef, {
        once: true,
        amount: 0.2,
    });
    const isInViewMemoryZoneRef = useInView(memoryZoneRef, {
        once: true,
        amount: 0.2,
    });

    return (
      <div>
        <div className="aura" />
        <div className="flex justify-center h-auto overflow-y-auto aura">
          <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
            {/* Header */}
            <Header
              content={{
                title: "สุขสันต์วันเกิดนะงับ❤️",
                subtitle: "My Luv 🎂",
              }}
            />

            {/* Image Section */}
            <div className="w-[245px] h-[320px] rounded-lg shadow-lg mb-12">
              <img
                src={_albums}
                alt={`image_${_albums}`}
                onClick={() => openModal(_albums)}
                loading="lazy"
                className="border-none bg-[#a7e6f76b] rounded-lg cursor-pointer"
              />
            </div>

            {/* Message Section */}
            <MessageSection
              data={_messages}
              ref={messageRef}
              isInView={isInViewMessageRef}
            />

            {/* Audio Player Section */}
            <div className="bg-[#e8f8f5] rounded-xl shadow-lg p-4 w-[320px] flex flex-col gap-2 items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0i3cH9E2wH9pDMmgxcC78N0IS1wVS-svdw&s"
                  alt="Album"
                  className="w-[60px] h-[60px] rounded-lg"
                />
                <div>
                  <div className="text-sm font-bold text-gray-800">
                    Proud (ภูมิใจที่ได้ดูแลแฟน)
                  </div>
                  <div className="text-xs text-gray-500">Fellow Fellow</div>
                </div>
              </div>
              <audio controls className="w-full mt-2">
                <source src="../Proud.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* MemoryZone Section */}
            <MemoryZone
              ref={memoryZoneRef}
              isInView={isInViewMemoryZoneRef}
              data={_birthdayMessages}
            />

            {/* Footer */}
            <div className="pb-20 font-bold text-[#f78da4] text-3xl">
              Love U Naaa Jub Jub 💕
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalVisible && (
          <div className="modal show" onClick={closeModal}>
            <div className="modal-content">
              {currentImage && (
                <img src={currentImage} alt="Preview" className="modal-image" />
              )}
            </div>
          </div>
        )}
      </div>
    );
}

export default App;
