import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 975120059;
    const serverSecret = "55583875e509baaf8373ea6940c23982";

    // const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(
      const TOKEN = generatePrebuiltToken(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Your name"
    );

    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://video-call-app-theta.vercel.app//room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
