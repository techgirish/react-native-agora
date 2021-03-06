/**
 * IP areas
 * @enum {number}
 */
export enum IPAreaCode {
    /**
     * Mainland China
     */
    AREA_CN = 1 << 0,
    /**
     * North America
     */
    AREA_NA = 1 << 1,
    /**
     * AREA_EUR
     */
    AREA_EUR = 1 << 2,
    /**
     * Asia, excluding Mainland China
     */
    AREA_AS = 1 << 3,
    /**
     * (Default) Global
     */
    AREA_GLOBAL = -1,
}

/**
 * Audio codec profile.
 * @enum {number}
 */
export enum AudioCodecProfileType {
    /**
     * (Default) LC-AAC, the low-complexity audio codec profile.
     */
    LCAAC = 0,
    /**
     * HE-AAC, the high-efficiency audio codec profile.
     */
    HEAAC = 1,
}

/**
 * Audio equalization band frequency.
 * @enum {number}
 */
export enum AudioEqualizationBandFrequency {
    /**
     * 31 Hz.
     */
    Band31 = 0,
    /**
     * 62 Hz.
     */
    Band62 = 1,
    /**
     * 125 Hz.
     */
    Band125 = 2,
    /**
     * 250 Hz.
     */
    Band250 = 3,
    /**
     * 500 Hz.
     */
    Band500 = 4,
    /**
     * 1 kHz.
     */
    Band1K = 5,
    /**
     * 2 kHz.
     */
    Band2K = 6,
    /**
     * 4 kHz.
     */
    Band4K = 7,
    /**
     * 8 kHz.
     */
    Band8K = 8,
    /**
     * 16 kHz.
     */
    Band16K = 9,
}

/**
 * The error information of the local audio.
 * @enum {number}
 */
export enum AudioLocalError {
    /**
     * The local audio is normal.
     */
    Ok = 0,
    /**
     * No specified reason for the local audio failure.
     */
    Failure = 1,
    /**
     * No permission to use the local audio device.
     */
    DeviceNoPermission = 2,
    /**
     * The microphone is in use.
     */
    DeviceBusy = 3,
    /**
     * The local audio recording fails. Check whether the recording device is working properly.
     */
    RecordFailure = 4,
    /**
     * The local audio encoding fails.
     */
    EncodeFailure = 5,
}

/**
 * The state of the local audio.
 * @enum {number}
 */
export enum AudioLocalState {
    /**
     * The local audio is in the initial state.
     */
    Stopped = 0,
    /**
     * The recording device starts successfully.
     */
    Recording = 1,
    /**
     * The first audio frame encodes successfully.
     */
    Encoding = 2,
    /**
     * The local audio fails to start.
     */
    Failed = 3,
}

/**
 * The error code of the audio mixing file.
 * @enum {number}
 */
export enum AudioMixingErrorCode {
    /**
     * The SDK cannot open the audio mixing file.
     */
    CanNotOpen = 701,
    /**
     * The SDK opens the audio mixing file too frequently.
     */
    TooFrequentCall = 702,
    /**
     * The opening of the audio mixing file is interrupted.
     */
    InterruptedEOF = 703,
    /**
     * No error.
     */
    OK = 0,
}

/**
 * The state of the audio mixing file.
 * @enum {number}
 */
export enum AudioMixingStateCode {
    /**
     * The audio mixing file is playing.
     */
    Playing = 710,
    /**
     * The audio mixing file pauses playing.
     */
    Paused = 711,
    /**
     * The audio mixing file stops playing.
     */
    Stopped = 713,
    /**
     * An exception occurs when playing the audio mixing file.
     */
    Failed = 714,
}

/**
 * Audio output routing.
 * @enum {number}
 */
export enum AudioOutputRouting {
    /**
     * Default.
     */
    Default = -1,
    /**
     * Headset.
     */
    Headset = 0,
    /**
     * Earpiece.
     */
    Earpiece = 1,
    /**
     * Headset with no microphone.
     */
    HeadsetNoMic = 2,
    /**
     * Speakerphone.
     */
    Speakerphone = 3,
    /**
     * Loudspeaker.
     */
    Loudspeaker = 4,
    /**
     * Bluetooth headset.
     */
    HeadsetBluetooth = 5,
}

/**
 * Audio profile.
 * @enum {number}
 */
export enum AudioProfile {
    /**
     * Default audio profile.
     * - In the Communication profile: A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
     * - In the Live-broadcast profile: A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 52 Kbps.
     */
    Default = 0,
    /**
     * A sample rate of 32 KHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
     */
    SpeechStandard = 1,
    /**
     * A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 48 Kbps.
     */
    MusicStandard = 2,
    /**
     * A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 56 Kbps.
     */
    MusicStandardStereo = 3,
    /**
     * A sample rate of 48 KHz, music encoding, mono, and a bitrate of up to 128 Kbps.
     */
    MusicHighQuality = 4,
    /**
     * A sample rate of 48 KHz, music encoding, stereo, and a bitrate of up to 192 Kbps.
     */
    MusicHighQualityStereo = 5,
}

/**
 * Use mode of the onRecordAudioFrame callback.
 * @enum {number}
 * TODO setPlaybackAudioFrameParameters
 */
export enum AudioRawFrameOperationMode {
    /**
     * Users only read the AudioFrame data without modifying anything. For example, when users acquire data with the Agora SDK then push the RTMP streams.
     */
    ReadOnly = 0,
    /**
     * Users replace the AudioFrame data with their own data and pass them to the SDK for encoding. For example, when users acquire data.
     */
    WriteOnly = 1,
    /**
     * Users read the data from AudioFrame, modify it, and then play it. For example, when users have their own sound-effect processing module and perform some voice pre-processing such as a voice change.
     */
    ReadWrite = 2,
}

/**
 * Audio recording quality.
 */
export enum AudioRecordingQuality {
    /**
     * The sample rate is 32 KHz, and the file size is around 1.2 MB after 10 minutes of recording.
     */
    Low = 0,
    /**
     * The sample rate is 32 KHz, and the file size is around 2 MB after 10 minutes of recording.
     */
    Medium = 1,
    /**
     * The sample rate is 32 KHz, and the file size is around 3.75 MB after 10 minutes of recording.
     */
    High = 2,
}

/**
 * The state of the remote audio.
 * @enum {number}
 */
export enum AudioRemoteState {
    /**
     * The remote audio is in the default state, probably due to:
     * @see AudioRemoteStateReason.LocalMuted
     * @see AudioRemoteStateReason.RemoteMuted
     * @see AudioRemoteStateReason.RemoteOffline
     */
    Stopped = 0,
    /**
     * The first remote audio packet is received.
     */
    Starting = 1,
    /**
     * The remote audio stream is decoded and plays normally, probably due to:
     * @see AudioRemoteStateReason.NetworkRecovery
     * @see AudioRemoteStateReason.LocalUnmuted
     * @see AudioRemoteStateReason.RemoteUnmuted
     */
    Decoding = 2,
    /**
     * The remote audio is frozen, probably due to:
     * @see AudioRemoteStateReason.NetworkCongestion
     */
    Frozen = 3,
    /**
     * The remote audio fails to start, probably due to:
     * @see AudioRemoteStateReason.Internal
     */
    Failed = 4,
}

/**
 * The reason of the remote audio state change.
 * @enum {number}
 */
export enum AudioRemoteStateReason {
    /**
     * Internal reasons.
     */
    Internal = 0,
    /**
     * Network congestion.
     */
    NetworkCongestion = 1,
    /**
     * Network recovery.
     */
    NetworkRecovery = 2,
    /**
     * The local user stops receiving the remote audio stream or disables the audio module.
     */
    LocalMuted = 3,
    /**
     * The local user resumes receiving the remote audio stream or enables the audio module.
     */
    LocalUnmuted = 4,
    /**
     * The remote user stops sending the audio stream or disables the audio module.
     */
    RemoteMuted = 5,
    /**
     * The remote user resumes sending the audio stream or enables the audio module.
     */
    RemoteUnmuted = 6,
    /**
     * The remote user leaves the channel.
     */
    RemoteOffline = 7,
}

/**
 * The preset local voice reverberation option.
 * @enum {number}
 */
export enum AudioReverbPreset {
    /**
     * The original voice (no local voice reverberation).
     */
    Off = 0x00000000,
    /**
     * Pop music
     */
    Popular = 0x00000001,
    /**
     * R&B
     */
    RnB = 0x00000002,
    /**
     * Rock music
     */
    Rock = 0x00000003,
    /**
     * Hip-hop music
     */
    HipHop = 0x00000004,
    /**
     * Pop concert
     */
    VocalConcert = 0x00000005,
    /**
     * Karaoke
     */
    KTV = 0x00000006,
    /**
     * Recording studio
     */
    Studio = 0x00000007,
    /**
     * The reverberation style typical of a KTV venue (enhanced).
     */
    FX_KTV = 0x00100001,
    /**
     * The reverberation style typical of a concert hall (enhanced).
     */
    FX_VOCAL_CONCERT = 0x00100002,
    /**
     * The reverberation style typical of an uncle’s voice.
     */
    FX_UNCLE = 0x00100003,
    /**
     * The reverberation style typical of a sister’s voice.
     */
    FX_SISTER = 0x00100004,
    /**
     * The reverberation style typical of a recording studio (enhanced).
     */
    FX_STUDIO = 0x00100005,
    /**
     * The reverberation style typical of popular music (enhanced).
     */
    FX_POPULAR = 0x00100006,
    /**
     * The reverberation style typical of R&B music (enhanced).
     */
    FX_RNB = 0x00100007,
    /**
     * The reverberation style typical of the vintage phonograph.
     */
    FX_PHONOGRAPH = 0x00100008,
    /**
     * The reverberation of the virtual stereo. The virtual stereo is an effect that renders the monophonic audio as the stereo audio, so that all users in the channel can hear the stereo voice effect. To achieve better virtual stereo reverberation, Agora recommends setting the profile parameter in setAudioProfile as MusicHighQualityStereo(5).
     * @see RtcEngine#setAudioProfile
     * @see AudioProfile.MusicHighQualityStereo
     */
    VIRTUAL_STEREO = 0x00200001,
}

/**
 * Audio reverberation type.
 * @enum {number}
 */
export enum AudioReverbType {
    /**
     * The level of the dry signal (dB). The value ranges between -20 and 10.
     */
    DryLevel = 0,
    /**
     * The level of the early reflection signal (wet signal) in dB. The value ranges between -20 and 10.
     */
    WetLevel = 1,
    /**
     * The room size of the reverberation. A larger room size means a stronger reverberation. The value ranges between 0 and 100.
     */
    RoomSize = 2,
    /**
     * The length of the initial delay of the wet signal (ms). The value ranges between 0 and 200.
     */
    WetDelay = 3,
    /**
     * The reverberation strength. The value ranges between 0 and 100.
     */
    Strength = 4,
}

/**
 * Audio sample rate.
 * @enum {number}
 */
export enum AudioSampleRateType {
    /**
     * 32 kHz.
     */
    Type32000 = 32000,
    /**
     * 44.1 kHz.
     */
    Type44100 = 44100,
    /**
     * 48 kHz.
     */
    Type48000 = 48000,
}

/**
 * Audio scenario.
 * @enum {number}
 */
export enum AudioScenario {
    /**
     * Default.
     */
    Default = 0,
    /**
     * Entertainment scenario, supporting voice during gameplay.
     */
    ChatRoomEntertainment = 1,
    /**
     * Education scenario, prioritizing fluency and stability.
     */
    Education = 2,
    /**
     * Live gaming scenario, enabling the gaming audio effects in the speaker mode in a live broadcast scenario. Choose this scenario for high-fidelity music playback.
     */
    GameStreaming = 3,
    /**
     * Showroom scenario, optimizing the audio quality with external professional equipment.
     */
    ShowRoom = 4,
    /**
     * Gaming scenario.
     */
    ChatRoomGaming = 5,
}

/**
 * Audio session restriction.
 * @enum {number}
 * TODO iOS setAudioSessionOperationRestriction
 */
export enum AudioSessionOperationRestriction {
    /**
     * No restriction, the SDK has full control of the audio session operations.
     */
    None = 0,
    /**
     * The SDK does not change the audio session category.
     */
    SetCategory = 1,
    /**
     * The SDK does not change any setting of the audio session (category, mode, categoryOptions).
     */
    ConfigureSession = 1 << 1,
    /**
     * The SDK keeps the audio session active when leaving a channel.
     */
    DeactivateSession = 1 << 2,
    /**
     * The SDK does not configure the audio session anymore.
     */
    All = 1 << 7,
}

/**
 * The preset audio voice configuration used to change the voice effect.
 * @enum {number}
 */
export enum AudioVoiceChanger {
    /**
     * The original voice (no local voice change).
     */
    Off = 0x00000000,
    /**
     * An old man’s voice.
     */
    OldMan = 0x00000001,
    /**
     * A little boy’s voice.
     */
    BabyBoy = 0x00000002,
    /**
     * A little girl’s voice.
     */
    BabyGirl = 0x00000003,
    /**
     * TBD
     */
    ZhuBaJie = 0x00000004,
    /**
     * Ethereal vocal effects.
     */
    Ethereal = 0x00000005,
    /**
     * Hulk’s voice.
     */
    Hulk = 0x00000006,
    /**
     * A more vigorous voice.
     */
    BEAUTY_VIGOROUS = 0x00100001,
    /**
     * A deeper voice.
     */
    BEAUTY_DEEP = 0x00100002,
    /**
     * A mellower voice.
     */
    BEAUTY_MELLOW = 0x00100003,
    /**
     * Falsetto.
     */
    BEAUTY_FALSETTO = 0x00100004,
    /**
     * A fuller voice.
     */
    BEAUTY_FULL = 0x00100005,
    /**
     * A clearer voice.
     */
    BEAUTY_CLEAR = 0x00100006,
    /**
     * A more resounding voice.
     */
    BEAUTY_RESOUNDING = 0x00100007,
    /**
     * A more ringing voice.
     */
    BEAUTY_RINGING = 0x00100008,
    /**
     * A more spatially resonant voice.
     */
    BEAUTY_SPACIAL = 0x00100009,
    /**
     * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
     */
    GENERAL_BEAUTY_VOICE_MALE_MAGNETIC = 0x00200001,
    /**
     * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    GENERAL_BEAUTY_VOICE_FEMALE_FRESH = 0x00200002,
    /**
     * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
     */
    GENERAL_BEAUTY_VOICE_FEMALE_VITALITY = 0x00200003,
}

/**
 * The camera capturer configuration.
 * @enum {number}
 */
export enum CameraCaptureOutputPreference {
    /**
     * (default) Self-adapts the camera output parameters to the system performance and network conditions to balance CPU consumption and video preview quality.
     */
    Auto = 0,
    /**
     * Prioritizes the system performance. The SDK chooses the dimension and frame rate of the local camera capture closest to those set by setVideoEncoderConfiguration.
     * @see RtcEngine.setVideoEncoderConfiguration
     */
    Performance = 1,
    /**
     * Prioritizes the local preview quality. The SDK chooses higher camera output parameters to improve the local video preview quality. This option requires extra CPU and RAM usage for video pre-processing.
     */
    Preview = 2,
    /**
     * Internal use only
     */
    Unkown = 3,
}

/**
 * The camera direction.
 * @enum {number}
 */
export enum CameraDirection {
    /**
     * The rear camera.
     */
    Rear = 0,
    /**
     * The front camera.
     */
    Front = 1,
}

/**
 * The error code in AgoraChannelMediaRelayError.
 * @enum {number}
 */
export enum ChannelMediaRelayError {
    /**
     * The state is normal.
     */
    None = 0,
    /**
     * An error occurs in the server response.
     */
    ServerErrorResponse = 1,
    /**
     * No server response. You can call the leaveChannel method to leave the channel.
     * @see RtcEngine.leaveChannel
     */
    ServerNoResponse = 2,
    /**
     * The SDK fails to access the service, probably due to limited resources of the server.
     */
    NoResourceAvailable = 3,
    /**
     * Fails to send the relay request.
     */
    FailedJoinSourceChannel = 4,
    /**
     * Fails to accept the relay request.
     */
    FailedJoinDestinationChannel = 5,
    /**
     * The server fails to receive the media stream.
     */
    FailedPacketReceivedFromSource = 6,
    /**
     * The server fails to send the media stream.
     */
    FailedPacketSentToDestination = 7,
    /**
     * The SDK disconnects from the server due to poor network connections. You can call the leaveChannel method to leave the channel.
     * @see RtcEngine.leaveChannel
     */
    ServerConnectionLost = 8,
    /**
     * An internal error occurs in the server.
     */
    InternalError = 9,
    /**
     * The token of the source channel has expired.
     */
    SourceTokenExpired = 10,
    /**
     * The token of the destination channel has expired.
     */
    DestinationTokenExpired = 11,
}

/**
 * The event code in AgoraChannelMediaRelayEvent.
 * @enum {number}
 */
export enum ChannelMediaRelayEvent {
    /**
     * The user disconnects from the server due to poor network connections.
     */
    Disconnect = 0,
    /**
     * The network reconnects.
     */
    Connected = 1,
    /**
     * The user joins the source channel.
     */
    JoinedSourceChannel = 2,
    /**
     * The user joins the destination channel.
     */
    JoinedDestinationChannel = 3,
    /**
     * The SDK starts relaying the media stream to the destination channel.
     */
    SentToDestinationChannel = 4,
    /**
     * The server receives the video stream from the source channel.
     */
    ReceivedVideoPacketFromSource = 5,
    /**
     * The server receives the audio stream from the source channel.
     */
    ReceivedAudioPacketFromSource = 6,
    /**
     * The destination channel is updated.
     */
    UpdateDestinationChannel = 7,
    /**
     * The destination channel update fails due to internal reasons.
     */
    UpdateDestinationChannelRefused = 8,
    /**
     * The destination channel does not change, which means that the destination channel fails to be updated.
     */
    UpdateDestinationChannelNotChange = 9,
    /**
     * The destination channel name is NULL.
     */
    UpdateDestinationChannelIsNil = 10,
    /**
     * The video profile is sent to the server.
     */
    VideoProfileUpdate = 11,
}

/**
 * The state code in AgoraChannelMediaRelayState.
 * @enum {number}
 */
export enum ChannelMediaRelayState {
    /**
     * The SDK is initializing.
     */
    Idle = 0,
    /**
     * The SDK tries to relay the media stream to the destination channel.
     */
    Connecting = 1,
    /**
     * The SDK successfully relays the media stream to the destination channel.
     */
    Running = 2,
    /**
     * A failure occurs. See the details in error.
     */
    Failure = 3,
}

/**
 * Channel profile.
 * @enum {number}
 */
export enum ChannelProfile {
    /**
     * (Default) The Communication profile.
     * Use this profile in one-on-one calls or group calls, where all users can talk freely.
     */
    Communication = 0,
    /**
     * The Live-Broadcast profile.
     * Users in a live-broadcast channel have a role as either broadcaster or audience. A broadcaster can both send and receive streams; an audience can only receive streams.
     */
    LiveBroadcasting = 1,
    /**
     * The Gaming profile.
     * This profile uses a codec with a lower bitrate and consumes less power. Applies to the gaming scenario, where all game players can talk freely.
     */
    Game = 2,
}

/**
 * Client role in a live broadcast.
 * @enum {number}
 */
export enum ClientRole {
    /**
     * A broadcaster can both send and receive streams.
     */
    Broadcaster = 1,
    /**
     * The default role. An audience can only receive streams.
     */
    Audience = 2,
}

/**
 * Reasons for the connection state change.
 * @enum {number}
 */
export enum ConnectionChangedReason {
    /**
     * The SDK is connecting to Agora’s edge server.
     */
    Connecting = 0,
    /**
     * The SDK has joined the channel successfully.
     */
    JoinSuccess = 1,
    /**
     * The connection between the SDK and Agora’s edge server is interrupted.
     */
    Interrupted = 2,
    /**
     * The connection between the SDK and Agora’s edge server is banned by Agora’s edge server.
     */
    BannedByServer = 3,
    /**
     * The SDK fails to join the channel for more than 20 minutes and stops reconnecting to the channel.
     */
    JoinFailed = 4,
    /**
     * The SDK has left the channel.
     */
    LeaveChannel = 5,
    /**
     * The specified App ID is invalid. Try to rejoin the channel with a valid App ID.
     */
    InvalidAppId = 6,
    /**
     * The specified channel name is invalid. Try to rejoin the channel with a valid channel name.
     */
    InvalidChannelName = 7,
    /**
     * The generated token is invalid probably due to the following reasons:
     * - The App Certificate for the project is enabled in Console, but you do not use Token when joining the channel. If you enable the App Certificate, you must use a token to join the channel.
     * - The uid that you specify in the joinChannel method is different from the uid that you pass for generating the token.
     * @see RtcEngine.joinChannel
     */
    InvalidToken = 8,
    /**
     * The token has expired. Generate a new token from your server.
     */
    TokenExpired = 9,
    /**
     * The user is banned by the server.
     */
    RejectedByServer = 10,
    /**
     * The SDK tries to reconnect after setting a proxy server.
     */
    SettingProxyServer = 11,
    /**
     * The token renews.
     */
    RenewToken = 12,
    /**
     * The client IP address has changed, probably due to a change of the network type, IP address, or network port.
     */
    ClientIpAddressChanged = 13,
    /**
     * Timeout for the keep-alive of the connection between the SDK and Agora’s edge server. The connection state changes to:
     * @see ConnectionStateType.Reconnecting
     */
    KeepAliveTimeout = 14,
}

/**
 * Connection states.
 * @enum {number}
 */
export enum ConnectionStateType {
    /**
     * The SDK is disconnected from Agora's edge server.
     * - This is the initial state before joinChannel.
     * @see RtcEngine.joinChannel
     * - The SDK also enters this state when the app calls leaveChannel.
     * @see RtcEngine.leaveChannel
     */
    Disconnected = 1,
    /**
     * The SDK is connecting to Agora's edge server.
     * - When the app calls joinChannel, the SDK starts to establish a connection to the specified channel, triggers the onConnectionStateChanged callback, and switches to the Connecting state.
     * @see RtcEngine.joinChannel
     * @see RtcEngineEvents.onConnectionStateChanged
     * @see ConnectionStateType.Connecting
     * - When the SDK successfully joins the channel, the SDK triggers the onConnectionStateChanged callback and switches to the Connected state.
     * @see RtcEngineEvents.onConnectionStateChanged
     * @see ConnectionStateType.Connected
     * - After the SDK joins the channel and when it finishes initializing the media engine, the SDK triggers the onJoinChannelSuccess callback.
     * @see RtcEngineEvents.onJoinChannelSuccess
     */
    Connecting = 2,
    /**
     * The SDK is connected to Agora's edge server and joins a channel. You can now publish or subscribe to a media stream in the channel.
     * If the connection to the channel is lost because, for example, the network is down or switched, the SDK automatically tries to reconnect and triggers:
     * - The onConnectionStateChanged callback, and switches to the Reconnecting state.
     * @see RtcEngineEvents.onConnectionStateChanged
     * @see ConnectionStateType.Reconnecting
     */
    Connected = 3,
    /**
     * The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.
     * - If the SDK cannot rejoin the channel within 10 seconds after being disconnected from Agora’s edge server, the SDK triggers the onConnectionLost callback, stays in the Reconnecting state, and keeps rejoining the channel.
     * @see RtcEngineEvents.onConnectionLost
     * - If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora’s edge server, the SDK triggers the onConnectionStateChanged callback, switches to the Failed state, and stops rejoining the channel.
     * @see RtcEngineEvents.onConnectionStateChanged
     * @see ConnectionStateType.Failed
     */
    Reconnecting = 4,
    /**
     * The SDK fails to connect to Agora's edge server or join the channel.
     * You must call leaveChannel to leave this state, and call joinChannel again to rejoin the channel.
     * @see RtcEngine.leaveChannel
     * @see RtcEngine.joinChannel
     * If the SDK is banned from joining the channel by Agora’s edge server (through the RESTful API), the SDK triggers the onConnectionStateChanged callbacks.
     * @see RtcEngineEvents.onConnectionStateChanged
     */
    Failed = 5,
}

/**
 * The video encoding degradation preference under limited bandwidth.
 * @enum {number}
 */
export enum DegradationPreference {
    /**
     * (Default) Degrades the frame rate to guarantee the video quality.
     */
    MaintainQuality = 0,
    /**
     * Degrades the video quality to guarantee the frame rate.
     */
    MaintainFramerate = 1,
    /**
     * Reserved for future use.
     */
    Balanced = 2,
}

/**
 * Encryption mode
 * @enum {string}
 */
export enum EncryptionMode {
    /**
     * (Default) 128-bit AES encryption, XTS mode.
     */
    AES128XTS = 'aes-128-xts',
    /**
     * 256-bit AES encryption, XTS mode.
     */
    AES256XTS = 'aes-256-xts',
    /**
     * 128-bit AES encryption, ECB mode.
     */
    AES128ECB = 'aes-128-ecb',
}

/**
 * Error codes occur when the SDK encounters an error that cannot be recovered automatically without any app intervention.
 * @enum {number}
 */
export enum ErrorCode {
    /**
     * No error occurs.
     */
    NoError = 0,
    /**
     * A general error occurs (no specified reason).
     */
    Failed = 1,
    /**
     * An invalid parameter is used. For example, the specific channel name includes illegal characters.
     */
    InvalidArgument = 2,
    /**
     * The SDK module is not ready.
     * Possible solutions:
     * - Check the audio device.
     * - Check the completeness of the app.
     * - Re-initialize the SDK.
     */
    NotReady = 3,
    /**
     * The current state of the SDK does not support this function.
     */
    NotSupported = 4,
    /**
     * The request is rejected. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    Refused = 5,
    /**
     * The buffer size is not big enough to store the returned data.
     */
    BufferTooSmall = 6,
    /**
     * The SDK is not initialized before calling this method.
     */
    NotInitialized = 7,
    /**
     * No permission exists. Check if the user has granted access to the audio or video device.
     */
    NoPermission = 9,
    /**
     * An API method timeout occurs. Some API methods require the SDK to return the execution result, and this error occurs if the request takes too long (over 10 seconds) for the SDK to process.
     */
    TimedOut = 10,
    /**
     * The request is canceled. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    Canceled = 11,
    /**
     * The method is called too often. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    TooOften = 12,
    /**
     * The SDK fails to bind to the network socket. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    BindSocket = 13,
    /**
     * The network is unavailable. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    NetDown = 14,
    /**
     * No network buffers are available. This is for internal SDK use only, and is not returned to the app through any method or callback.
     */
    NoBufs = 15,
    /**
     * The request to join the channel is rejected.
     * Possible reasons are:
     * - The user is already in the channel, and still calls the API method to join the channel, for example, joinChannel
     * @see RtcEngine.joinChannel
     * - The user tries joining the channel during the echo test. Please join the channel after the echo test ends.
     */
    JoinChannelRejected = 17,
    /**
     * The request to leave the channel is rejected.
     * Possible reasons are:
     * - The user left the channel and still calls the API method to leave the channel, for example, leaveChannel.
     * @see RtcEngine.leaveChannel
     * - The user has not joined the channel and calls the API method to leave the channel.
     */
    LeaveChannelRejected = 18,
    /**
     * The resources are occupied and cannot be used.
     */
    AlreadyInUse = 19,
    /**
     * The SDK gave up the request due to too many requests.
     */
    Abort = 20,
    /**
     * In Windows, specific firewall settings cause the SDK to fail to initialize and crash.
     */
    InitNetEngine = 21,
    /**
     * The app uses too much of the system resources and the SDK fails to allocate the resources.
     */
    ResourceLimited = 22,
    /**
     * The specified App ID is invalid. Please try to rejoin the channel with a valid App ID.
     */
    InvalidAppId = 101,
    /**
     * The specified channel name is invalid. Please try to rejoin the channel with a valid channel name.
     */
    InvalidChannelId = 102,
    /**
     * The token expired. DEPRECATED as of v2.4.1. Use TokenExpired(9) in the reason parameter of onConnectionStateChanged.
     * @see ConnectionChangedReason.TokenExpired
     * @see RtcEngineEvents.onConnectionStateChanged
     * Possible reasons are:
     * - Authorized Timestamp expired: The timestamp is represented by the number of seconds elapsed since 1/1/1970. The user can use the token to access the Agora service within five minutes after the token is generated. If the user does not access the Agora service after five minutes, this token is no longer valid.
     * - Call Expiration Timestamp expired: The timestamp is the exact time when a user can no longer use the Agora service (for example, when a user is forced to leave an ongoing call). When a value is set for the Call Expiration Timestamp, it does not mean that the token will expire, but that the user will be banned from the channel.
     * @deprecated
     */
    TokenExpired = 109,
    /**
     * The token is invalid. DEPRECATED as of v2.4.1. Use InvalidToken(8) in the reason parameter of onConnectionStateChanged.
     * @see ConnectionChangedReason.InvalidToken
     * @see RtcEngineEvents.onConnectionStateChanged
     * Possible reasons are:
     * - The App Certificate for the project is enabled in Console, but the user is using the App ID. Once the App Certificate is enabled, the user must use a token.
     * - The uid is mandatory, and users must set the same uid as the one set in the joinChannel method.
     * @see RtcEngine.joinChannel
     * @deprecated
     */
    InvalidToken = 110,
    /**
     * The Internet connection is interrupted. This applies to the Agora Web SDK only.
     */
    ConnectionInterrupted = 111,
    /**
     * The Internet connection is lost. This applies to the Agora Web SDK only.
     */
    ConnectionLost = 112,
    /**
     * The user is not in the channel when calling the sendStreamMessage or getUserInfoByUserAccount method.
     * @see RtcEngine.sendStreamMessage
     * @see RtcEngine.getUserInfoByUserAccount
     */
    NotInChannel = 113,
    /**
     * The size of the sent data is over 1024 bytes when the user calls the sendStreamMessage method.
     * @see RtcEngine.sendStreamMessage
     */
    SizeTooLarge = 114,
    /**
     * The bitrate of the sent data exceeds the limit of 6 Kbps when the user calls the sendStreamMessage method.
     * @see RtcEngine.sendStreamMessage
     */
    BitrateLimit = 115,
    /**
     * Too many data streams (over five streams) are created when the user calls the createDataStream method.
     * @see RtcEngine.createDataStream
     */
    TooManyDataStreams = 116,
    /**
     * Decryption fails. The user may have used a different encryption password to join the channel. Check your settings or try rejoining the channel.
     */
    DecryptionFailed = 120,
    /**
     * The client is banned by the server.
     */
    ClientIsBannedByServer = 123,
    /**
     * Incorrect watermark file parameter.
     */
    WatermarkParam = 124,
    /**
     * Incorrect watermark file path.
     */
    WatermarkPath = 125,
    /**
     * Incorrect watermark file format.
     */
    WatermarkPng = 126,
    /**
     * Incorrect watermark file information.
     */
    WatermarkInfo = 127,
    /**
     * Incorrect watermark file data format.
     */
    WatermarkAGRB = 128,
    /**
     * An error occurs in reading the watermark file.
     */
    WatermarkRead = 129,
    /**
     * The encrypted stream is not allowed to publish.
     */
    EncryptedStreamNotAllowedPublish = 130,
    /**
     * The user account is invalid.
     */
    InvalidUserAccount = 134,
    /**
     * CDN related errors. Remove the original URL address and add a new one by calling the removePublishStreamUrl and addPublishStreamUrl methods.
     * @see RtcEngine.removePublishStreamUrl
     * @see RtcEngine.addPublishStreamUrl
     */
    PublishStreamCDNError = 151,
    /**
     * The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
     */
    PublishStreamNumReachLimit = 152,
    /**
     * The host manipulates other hosts' URLs. Check your app logic.
     */
    PublishStreamNotAuthorized = 153,
    /**
     * An error occurs in Agora’s streaming server. Call the addPublishStreamUrl method to publish the stream again.
     * @see RtcEngine.addPublishStreamUrl
     */
    PublishStreamInternalServerError = 154,
    /**
     * The server fails to find the stream.
     */
    PublishStreamNotFound = 155,
    /**
     * The format of the RTMP stream URL is not supported. Check whether the URL format is correct.
     */
    PublishStreamFormatNotSuppported = 156,
    /**
     * Fails to load the media engine.
     */
    LoadMediaEngine = 1001,
    /**
     * Fails to start the call after enabling the media engine.
     */
    StartCall = 1002,
    /**
     * Fails to start the camera. DEPRECATED as of v2.4.1. Use CaptureFailure(4) in the error parameter of onLocalVideoStateChanged.
     * @see LocalVideoStreamError.CaptureFailure
     * @see RtcEngineEvents.onLocalVideoStateChanged
     * @deprecated
     */
    StartCamera = 1003,
    /**
     * Fails to start the video rendering module.
     */
    StartVideoRender = 1004,
    /**
     * Audio Device Module: A general error occurs in the Audio Device Module (the reason is not classified specifically). Check if the audio device is used by another app, or try rejoining the channel.
     */
    AdmGeneralError = 1005,
    /**
     * Audio Device Module: An error occurs in using the Java resources.
     */
    AdmJavaResource = 1006,
    /**
     * Audio Device Module: An error occurs in setting the sampling frequency.
     */
    AdmSampleRate = 1007,
    /**
     * Audio Device Module: An error occurs in initializing the playback device.
     */
    AdmInitPlayout = 1008,
    /**
     * Audio Device Module: An error occurs in starting the playback device.
     */
    AdmStartPlayout = 1009,
    /**
     * Audio Device Module: An error occurs in stopping the playback device.
     */
    AdmStopPlayout = 1010,
    /**
     * Audio Device Module: An error occurs in initializing the recording device.
     */
    AdmInitRecording = 1011,
    /**
     * Audio Device Module: An error occurs in starting the recording device.
     */
    AdmStartRecording = 1012,
    /**
     * Audio Device Module: An error occurs in stopping the recording device.
     */
    AdmStopRecording = 1013,
    /**
     * Audio Device Module: A playback error occurs. Check your playback device, or try rejoining the channel.
     */
    AdmRuntimePlayoutError = 1015,
    /**
     * Audio Device Module: A recording error occurs.
     */
    AdmRuntimeRecordingError = 1017,
    /**
     * Audio Device Module: Fails to record.
     */
    AdmRecordAudioFailed = 1018,
    /**
     * Audio Device Module: Abnormal audio playback frequency.
     */
    AdmPlayAbnormalFrequency = 1020,
    /**
     * Audio Device Module: Abnormal audio recording frequency.
     */
    AdmRecordAbnormalFrequency = 1021,
    /**
     * Audio Device Module: An error occurs in initializing the loopback device.
     */
    AdmInitLoopback = 1022,
    /**
     * Audio Device Module: An error occurs in starting the loopback device.
     */
    AdmStartLoopback = 1023,
    /**
     * Audio Device Module: An error occurs in no recording Permission.
     */
    AdmNoPermission = 1027,
    /**
     * Audio Routing: Fails to route the audio to the connected Bluetooth device. The default route is used.
     */
    AudioBtScoFailed = 1030,
    /**
     * Audio Device Module: No recording device exists.
     */
    AdmNoRecordingDevice = 1359,
    /**
     * No playback device exists.
     */
    AdmNoPlayoutDevice = 1360,
    /**
     * Video Device Module: The camera is unauthorized.
     */
    VdmCameraNotAuthorized = 1501,
    /**
     * Video Device Module: An unknown error occurs.
     */
    VcmUnknownError = 1600,
    /**
     * Video Device Module: An error occurs in initializing the video encoder.
     */
    VcmEncoderInitError = 1601,
    /**
     * Video Device Module: An error occurs in video encoding.
     */
    VcmEncoderEncodeError = 1602,
    /**
     * Video Device Module: An error occurs in setting the video encoder.
     * @deprecated
     */
    VcmEncoderSetError = 1603,
}

/**
 * State of importing an external video stream in a live broadcast.
 * @enum {number}
 */
export enum InjectStreamStatus {
    /**
     * The external video stream imported successfully.
     */
    StartSuccess = 0,
    /**
     * The external video stream already exists.
     */
    StartAlreadyExists = 1,
    /**
     * The external video stream import is unauthorized.
     */
    StartUnauthorized = 2,
    /**
     * Import external video stream timeout.
     */
    StartTimedout = 3,
    /**
     * The external video stream failed to import.
     */
    StartFailed = 4,
    /**
     * The external video stream imports successfully.
     */
    StopSuccess = 5,
    /**
     * No external video stream is found.
     */
    StopNotFound = 6,
    /**
     * The external video stream is stopped from being unauthorized.
     */
    StopUnauthorized = 7,
    /**
     * Importing the external video stream timeout.
     */
    StopTimedout = 8,
    /**
     * Importing the external video stream failed.
     */
    StopFailed = 9,
    /**
     * The external video stream import is interrupted.
     */
    Broken = 10,
}

/**
 * The state of the probe test result.
 * @enum {number}
 */
export enum LastmileProbeResultState {
    /**
     * the last-mile network probe test is complete.
     */
    Complete = 1,
    /**
     * the last-mile network probe test is incomplete and the bandwidth estimation is not available, probably due to limited test resources.
     */
    IncompleteNoBwe = 2,
    /**
     * the last-mile network probe test is not carried out, probably due to poor network conditions.
     */
    Unavailable = 3,
}

/**
 * The lightening contrast level.
 * @enum {number}
 */
export enum LighteningContrastLevel {
    /**
     * Low contrast level.
     */
    Low = 0,
    /**
     * (Default) Normal contrast level.
     */
    Normal = 1,
    /**
     * High contrast level.
     */
    High = 2,
}

/**
 * The detailed error information of the local video.
 * @enum {number}
 */
export enum LocalVideoStreamError {
    /**
     * The local video is normal.
     */
    OK = 0,
    /**
     * No specified reason for the local video failure.
     */
    Failure = 1,
    /**
     * No permission to use the local video device.
     */
    DeviceNoPermission = 2,
    /**
     * The local video capturer is in use.
     */
    DeviceBusy = 3,
    /**
     * The local video capture fails. Check whether the capturer is working properly.
     */
    CaptureFailure = 4,
    /**
     * The local video encoding fails.
     */
    EncodeFailure = 5,
}

/**
 * The state of the local video stream.
 * @enum {number}
 */
export enum LocalVideoStreamState {
    /**
     * The local video is in the initial state.
     */
    Stopped = 0,
    /**
     * The local video capturer starts successfully.
     */
    Capturing = 1,
    /**
     * The first local video frame encodes successfully.
     */
    Encoding = 2,
    /**
     * The local video fails to start.
     */
    Failed = 3,
}

/**
 * Output log filter level.
 * @enum {number}
 */
export enum LogFilter {
    /**
     * Do not output any log information.
     */
    Off = 0,
    /**
     * Output all log information. Set your log filter as debug if you want to get the most complete log file.
     */
    Debug = 0x080f,
    /**
     * Output CRITICAL, ERROR, WARNING, and INFO level log information. We recommend setting your log filter as this level.
     */
    Info = 0x000f,
    /**
     * Outputs CRITICAL, ERROR, and WARNING level log information.
     */
    Warning = 0x000e,
    /**
     * Outputs CRITICAL and ERROR level log information.
     */
    Error = 0x000c,
    /**
     * Outputs CRITICAL level log information.
     */
    Critical = 0x0008,
}

/**
 * Media device type.
 * @enum {number}
 * TODO MacOS AgoraMediaDeviceType
 */
export enum MediaDeviceType {
    /**
     * Unknown device.
     */
    AudioUnknown = -1,
    /**
     * Audio playback device.
     */
    AudioPlayout = 0,
    /**
     * Audio recording device.
     */
    AudioRecording = 1,
    /**
     * Video render device.
     */
    VideoRender = 2,
    /**
     * Video capture device.
     */
    VideoCapture = 3,
}

/**
 * Media type.
 * @enum {number}
 * TODO LiveEngine
 */
export enum MediaType {
    /**
     * No audio and video.
     */
    None = 0,
    /**
     * Audio only.
     */
    AudioOnly = 1,
    /**
     * Video only.
     */
    VideoOnly = 2,
    /**
     * Audio and video.
     */
    AudioAndVideo = 3,
}

/**
 * The metadata type.
 * @enum {number}
 * TODO registerMediaMetadataObserver
 */
export enum MetadataType {
    /**
     * the metadata type is unknown.
     */
    Unknown = -1,
    /**
     * the metadata type is video.
     */
    Video = 0,
}

/**
 * Network quality.
 * @enum {number}
 */
export enum NetworkQuality {
    /**
     * The network quality is unknown.
     */
    Unknown = 0,
    /**
     * The network quality is excellent.
     */
    Excellent = 1,
    /**
     * The network quality is quite good, but the bitrate may be slightly lower than excellent.
     */
    Good = 2,
    /**
     * Users can feel the communication slightly impaired.
     */
    Poor = 3,
    /**
     * Users can communicate only not very smoothly.
     */
    Bad = 4,
    /**
     * The network quality is so bad that users can hardly communicate.
     */
    VBad = 5,
    /**
     * The network is disconnected and users cannot communicate at all.
     */
    Down = 6,
    /**
     * Users cannot detect the network quality. (Not in use.)
     */
    Unsupported = 7,
    /**
     * Detecting the network quality.
     */
    Detecting = 8,
}

/**
 * Network type.
 * @enum {number}
 */
export enum NetworkType {
    /**
     * The network type is unknown.
     */
    Unknown = -1,
    /**
     * The SDK disconnects from the network.
     */
    Disconnected = 0,
    /**
     * The network type is LAN.
     */
    LAN = 1,
    /**
     * The network type is Wi-Fi (including hotspots).
     */
    WIFI = 2,
    /**
     * The network type is mobile 2G.
     */
    Mobile2G = 3,
    /**
     * The network type is mobile 3G.
     */
    Mobile3G = 4,
    /**
     * The network type is mobile 4G.
     */
    Mobile4G = 5,
}

/**
 * Default camera position
 * @enum {number}
 * TODO AgoraRtcDefaultCamera
 */
export enum RtcDefaultCameraPosition {
    /**
     * Front camera
     */
    Front = 0,
    /**
     * Rear camera
     */
    Back = 1,
}

/**
 * Lifecycle of the CDN live video stream.
 * @enum {number}
 * TODO AgoraPublisherConfiguration
 */
export enum RtmpStreamLifeCycle {
    /**
     * Bound to the channel lifecycle. If all hosts leave the channel, the CDN live streaming stops after 30 seconds.
     */
    BindToChannel = 1,
    /**
     * Bound to the owner of the RTMP stream. If the owner leaves the channel, the CDN live streaming stops immediately.
     */
    BindToOwnner = 2,
}

/**
 * The detailed error information for streaming.
 * @enum {number}
 */
export enum RtmpStreamingErrorCode {
    /**
     * The RTMP streaming publishes successfully.
     */
    OK = 0,
    /**
     * Invalid argument used. If, for example, you do not call the setLiveTranscoding method to configure the LiveTranscoding parameters before calling the addPublishStreamUrl method, the SDK returns this error. Check whether you set the parameters in the setLiveTranscoding method properly.
     * @see RtcEngine.setLiveTranscoding
     * @see RtcEngine.addPublishStreamUrl
     */
    InvalidParameters = 1,
    /**
     * The RTMP streaming is encrypted and cannot be published.
     */
    EncryptedStreamNotAllowed = 2,
    /**
     * Timeout for the RTMP streaming. Call the addPublishStreamUrl method to publish the streaming again.
     * @see RtcEngine.addPublishStreamUrl
     */
    ConnectionTimeout = 3,
    /**
     * An error occurs in Agora’s streaming server. Call the addPublishStreamUrl method to publish the streaming again.
     * @see RtcEngine.addPublishStreamUrl
     */
    InternalServerError = 4,
    /**
     * An error occurs in the RTMP server.
     */
    RtmpServerError = 5,
    /**
     * The RTMP streaming publishes too frequently.
     */
    TooOften = 6,
    /**
     * The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
     */
    ReachLimit = 7,
    /**
     * The host manipulates other hosts' URLs. Check your app logic.
     */
    NotAuthorized = 8,
    /**
     * Agora’s server fails to find the RTMP streaming.
     */
    StreamNotFound = 9,
    /**
     * The format of the RTMP streaming URL is not supported. Check whether the URL format is correct.
     */
    FormatNotSupported = 10,
}

/**
 * The RTMP streaming state.
 * @enum {number}
 */
export enum RtmpStreamingState {
    /**
     * The RTMP streaming has not started or has ended. This state is also triggered after you remove an RTMP address from the CDN by calling removePublishStreamUrl.
     * @see RtcEngine.removePublishStreamUrl
     */
    Idle = 0,
    /**
     * The SDK is connecting to Agora’s streaming server and the RTMP server. This state is triggered after you call the addPublishStreamUrl method.
     * @see RtcEngine.addPublishStreamUrl
     */
    Connecting = 1,
    /**
     * The RTMP streaming is being published. The SDK successfully publishes the RTMP streaming and returns this state.
     */
    Running = 2,
    /**
     * The RTMP streaming is recovering. When exceptions occur to the CDN, or the streaming is interrupted, the SDK attempts to resume RTMP streaming and returns this state.
     * - If the SDK successfully resumes the streaming, Running(2) returns.
     * @see RtmpStreamingState.Running
     * - If the streaming does not resume within 60 seconds or server errors occur, Failure(4) returns. You can also reconnect to the server by calling the removePublishStreamUrl and addPublishStreamUrl methods.
     * @see RtmpStreamingState.Failure
     * @see RtcEngine.removePublishStreamUrl
     * @see RtcEngine.addPublishStreamUrl
     */
    Recovering = 3,
    /**
     * The RTMP streaming fails. See the errorCode parameter for the detailed error information. You can also call the addPublishStreamUrl method to publish the RTMP streaming again.
     * @see RtcEngine.addPublishStreamUrl
     */
    Failure = 4,
}

/**
 * Stream fallback option.
 * @enum {number}
 */
export enum StreamFallbackOptions {
    /**
     * No fallback behavior for the local/remote video stream when the uplink/downlink network condition is unreliable. The quality of the stream is not guaranteed.
     */
    Disabled = 0,
    /**
     * Under unreliable downlink network conditions, the remote video stream falls back to the low-stream (low resolution and low bitrate) video. You can only set this option in the setRemoteSubscribeFallbackOption method. Nothing happens when you set this in the setLocalPublishFallbackOption method.
     * @see RtcEngine.setRemoteSubscribeFallbackOption
     * @see RtcEngine.setLocalPublishFallbackOption
     */
    VideoStreamLow = 1,
    /**
     * Under unreliable uplink network conditions, the published video stream falls back to audio only. Under unreliable downlink network conditions, the remote video stream first falls back to the low-stream (low resolution and low bitrate) video; and then to an audio-only stream if the network condition deteriorates.
     */
    AudioOnly = 2,
}

/**
 * Reason for the user being offline.
 * @enum {number}
 */
export enum UserOfflineReason {
    /**
     * The user left the current channel.
     */
    Quit = 0,
    /**
     * The SDK timed out and the user dropped offline because no data packet is received within a certain period of time. If a user quits the call and the message is not passed to the SDK (due to an unreliable channel), the SDK assumes the user dropped offline.
     */
    Dropped = 1,
    /**
     * (Live broadcast only.) The client role switched from the host to the audience.
     */
    BecomeAudience = 2,
}

/**
 * The priority of the remote user.
 * @enum {number}
 */
export enum UserPriority {
    /**
     * The user’s priority is high.
     */
    High = 50,
    /**
     * (Default) The user’s priority is normal.
     */
    Normal = 100,
}

/**
 * Video buffer type
 * @enum {number}
 * TODO iOS AgoraVideoSourceProtocol AgoraVideoSinkProtocol
 */
export enum VideoBufferType {
    /**
     * Use a pixel buffer to transmit the video data.
     */
    PixelBuffer = 1,
    /**
     * Use raw data to transmit the video data.
     */
    RawData = 2,
}

/**
 * Self-defined video codec profile.
 * @enum {number}
 */
export enum VideoCodecProfileType {
    /**
     * Baseline video codec profile. Generally used in video calls on mobile phones.
     */
    BaseLine = 66,
    /**
     * Main video codec profile. Generally used in mainstream electronics, such as MP4 players, portable video players, PSP, and iPads.
     */
    Main = 77,
    /**
     * (Default) High video codec profile. Generally used in high-resolution broadcasts or television.
     */
    High = 100,
}

/**
 * The content hint for screen sharing.
 * @enum {number}
 * TODO MacOS setScreenCaptureContentHint
 */
export enum VideoContentHint {
    /**
     * (Default) No content hint.
     */
    None = 0,
    /**
     * Motion-intensive content. Choose this option if you prefer smoothness or when you are sharing a video clip, movie, or video game.
     */
    Motion = 1,
    /**
     * Motionless content. Choose this option if you prefer sharpness or when you are sharing a picture, PowerPoint slide, or text.
     */
    Details = 2,
}

/**
 * Video frame rate
 * @enum {number}
 */
export enum VideoFrameRate {
    Min = -1,
    /**
     * 1 fps.
     */
    Fps1 = 1,
    /**
     * 7 fps.
     */
    Fps7 = 7,
    /**
     * 10 fps.
     */
    Fps10 = 10,
    /**
     * 15 fps.
     */
    Fps15 = 15,
    /**
     * 24 fps.
     */
    Fps24 = 24,
    /**
     * 30 fps.
     */
    Fps30 = 30,
    /**
     * 60 fps (macOS only).
     */
    Fps60 = 60,
}

/**
 * Sets the video bitrate (Kbps). Refer to the table below and set your bitrate. If you set a bitrate beyond the proper range, the SDK automatically adjusts it to a value within the range. You can also choose from the following options:
 * @enum {number}
 */
export enum BitRate {
    /**
     * (recommended) the standard bitrate mode. In this mode, the bitrates differ between the Live-broadcast and Communication profiles:
     * - Communication profile: the video bitrate is the same as the base bitrate.
     * - Live-broadcast profile: the video bitrate is twice the base bitrate.
     */
    Standard = 0,
    /**
     * the compatible bitrate mode. In this mode, the bitrate stays the same regardless of the profile. In the Live-broadcast profile, if you choose this mode, the video frame rate may be lower than the set value.
     */
    Compatible = -1,
}

/**
 * Video mirror mode.
 * @enum {number}
 */
export enum VideoMirrorMode {
    /**
     * (Default) The SDK determines the mirror mode.
     */
    Auto = 0,
    /**
     * Enables mirror mode.
     */
    Enabled = 1,
    /**
     * Disables mirror mode.
     */
    Disabled = 2,
}

/**
 * Video output orientation mode.
 * @enum {number}
 */
export enum VideoOutputOrientationMode {
    /**
     * Adaptive mode (Default).
     * The video encoder adapts to the orientation mode of the video input device. When you use a custom video source, the output video from the encoder inherits the orientation of the original video.
     * - If the width of the captured video from the SDK is greater than the height, the encoder sends the video in landscape mode. The encoder also sends the rotational information of the video, and the receiver uses the rotational information to rotate the received video.
     * - If the original video is in portrait mode, the output video from the encoder is also in portrait mode. The encoder also sends the rotational information of the video to the receiver.
     */
    Adaptative = 0,
    /**
     * Landscape mode.
     * The video encoder always sends the video in landscape mode. The video encoder rotates the original video before sending it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
     */
    FixedLandscape = 1,
    /**
     * Portrait mode.
     * The video encoder always sends the video in portrait mode. The video encoder rotates the original video before sending it and the rotational information is 0. This mode applies to scenarios involving CDN live streaming.
     */
    FixedPortrait = 2,
}

/**
 * Video pixel format.
 * @enum {number}
 * TODO iOS AgoraVideoSinkProtocol
 */
export enum VideoPixelFormat {
    /**
     * I420
     */
    I420 = 1,
    /**
     * BGRA
     */
    BGRA = 2,
    /**
     * NV12
     */
    NV12 = 8,
}

/**
 * Quality change of the local video in terms of target frame rate and target bit rate since last count.
 * @enum {number}
 */
export enum VideoQualityAdaptIndication {
    /**
     * The quality of the local video stays the same.
     */
    AdaptNone = 0,
    /**
     * The quality improves because the network bandwidth increases.
     */
    AdaptUpBandwidth = 1,
    /**
     * The quality worsens because the network bandwidth decreases.
     */
    AdaptDownBandwidth = 2,
}

/**
 * The state of the remote video.
 * @enum {number}
 */
export enum VideoRemoteState {
    /**
     * The remote video is in the default state, probably due to:
     * @see VideoRemoteStateReason.LocalMuted
     * @see VideoRemoteStateReason.RemoteMuted
     * @see VideoRemoteStateReason.RemoteOffline
     */
    Stopped = 0,
    /**
     * The first remote video packet is received.
     */
    Starting = 1,
    /**
     * The remote video stream is decoded and plays normally, probably due to:
     * @see VideoRemoteStateReason.NetworkRecovery
     * @see VideoRemoteStateReason.LocalUnmuted
     * @see VideoRemoteStateReason.RemoteUnmuted
     * @see VideoRemoteStateReason.AudioFallbackRecovery
     */
    Decoding = 2,
    /**
     * The remote video is frozen, probably due to:
     * @see VideoRemoteStateReason.NetworkCongestion
     * @see VideoRemoteStateReason.AudioFallback
     */
    Frozen = 3,
    /**
     * The remote video fails to start, probably due to:
     * @see VideoRemoteStateReason.Internal
     */
    Failed = 4,
}

/**
 * The reason of the remote video state change.
 * @enum {number}
 */
export enum VideoRemoteStateReason {
    /**
     * Internal reasons.
     */
    Internal = 0,
    /**
     * Network congestion.
     */
    NetworkCongestion = 1,
    /**
     * Network recovery.
     */
    NetworkRecovery = 2,
    /**
     * The local user stops receiving the remote video stream or disables the video module.
     */
    LocalMuted = 3,
    /**
     * The local user stops receiving the remote video stream or disables the video module.
     */
    LocalUnmuted = 4,
    /**
     * The remote user stops sending the video stream or disables the video module.
     */
    RemoteMuted = 5,
    /**
     * The remote user resumes sending the video stream or enables the video module.
     */
    RemoteUnmuted = 6,
    /**
     * The remote user leaves the channel.
     */
    RemoteOffline = 7,
    /**
     * The remote media stream falls back to the audio-only stream due to poor network conditions.
     */
    AudioFallback = 8,
    /**
     * The remote media stream switches back to the video stream after the network conditions improve.
     */
    AudioFallbackRecovery = 9,
}

/**
 * Video display mode.
 * @enum {number}
 */
export enum VideoRenderMode {
    /**
     * Uniformly scale the video until it fills the visible boundaries (cropped). One dimension of the video may have clipped contents.
     */
    Hidden = 1,
    /**
     * Uniformly scale the video until one of its dimension fits the boundary (zoomed to fit). Areas that are not filled due to the disparity in the aspect ratio are filled with black.
     */
    Fit = 2,
    /**
     * This mode is deprecated.
     * @deprecated
     */
    Adaptive = 3,
    /**
     * The fill mode. In this mode, the SDK stretches or zooms the video to fill the display window.
     */
    FILL = 4,
}

/**
 * Video rotation.
 * @enum {number}
 * TODO iOS AgoraVideoSourceProtocol AgoraVideoSinkProtocol
 */
export enum VideoRotation {
    /**
     * No rotation
     */
    RotationNone = 0,
    /**
     * 90 degrees
     */
    Rotation90 = 1,
    /**
     * 180 degrees
     */
    Rotation180 = 2,
    /**
     * 270 degrees
     */
    Rotation270 = 3,
}

/**
 * Video stream type.
 * @enum {number}
 */
export enum VideoStreamType {
    /**
     * High-bitrate, high-resolution video stream.
     */
    High = 0,
    /**
     * Low-bitrate, low-resolution video stream.
     */
    Low = 1,
}

/**
 * Warning codes occur when the SDK encounters an error that may be recovered automatically. These are only notifications, and can generally be ignored. For example, when the SDK loses connection to the server, the SDK reports the OpenChannelTimeout(106) warning and tries to reconnect automatically.
 * @see WarningCode.OpenChannelTimeout
 * @enum {number}
 */
export enum WarningCode {
    /**
     * The specified view is invalid. Specify a view when using the video call function.
     */
    InvalidView = 8,
    /**
     * Failed to initialize the video function, possibly caused by a lack of resources. The users cannot see the video while the voice communication is not affected.
     */
    InitVideo = 16,
    /**
     * The request is pending, usually due to some module not being ready, and the SDK postpones processing the request.
     */
    Pending = 20,
    /**
     * No channel resources are available. Maybe because the server cannot allocate any channel resource.
     */
    NoAvailableChannel = 103,
    /**
     * A timeout occurs when looking up the channel. When joining a channel, the SDK looks up the specified channel. The warning usually occurs when the network condition is too poor for the SDK to connect to the server.
     */
    LookupChannelTimeout = 104,
    /**
     * The server rejects the request to look up the channel. The server cannot process this request or the request is illegal. DEPRECATED as of v2.4.1. Use RejectedByServer(10) in the reason parameter of onConnectionStateChanged.
     * @see ConnectionChangedReason.RejectedByServer
     * @see RtcEngineEvents.onConnectionStateChanged
     * @deprecated
     */
    LookupChannelRejected = 105,
    /**
     * The server rejects the request to look up the channel. The server cannot process this request or the request is illegal.
     */
    OpenChannelTimeout = 106,
    /**
     * The server rejects the request to open the channel. The server cannot process this request or the request is illegal.
     */
    OpenChannelRejected = 107,
    /**
     * A timeout occurs when switching to the live video.
     */
    SwitchLiveVideoTimeout = 111,
    /**
     * A timeout occurs when setting the client role in the live broadcast profile.
     */
    SetClientRoleTimeout = 118,
    /**
     * The client role is unauthorized.
     */
    SetClientRoleNotAuthorized = 119,
    /**
     * The ticket to open the channel is invalid.
     */
    OpenChannelInvalidTicket = 121,
    /**
     * Try connecting to another server.
     */
    OpenChannelTryNextVos = 122,
    /**
     * An error occurs in opening the audio mixing file.
     */
    AudioMixingOpenError = 701,
    /**
     * Audio Device Module: a warning occurs in the playback device.
     */
    AdmRuntimePlayoutWarning = 1014,
    /**
     * Audio Device Module: a warning occurs in the recording device.
     */
    AdmRuntimeRecordingWarning = 1016,
    /**
     * Audio Device Module: no valid audio data is collected.
     */
    AdmRecordAudioSilence = 1019,
    /**
     * Audio Device Module: a playback device fails.
     */
    AdmPlaybackMalfunction = 1020,
    /**
     * Audio Device Module: a recording device fails.
     */
    AdmRecordMalfunction = 1021,
    /**
     * Audio Device Module: call is interrupted by system events such as phone call or siri etc.
     */
    AdmInterruption = 1025,
    /**
     * Audio Device Module: the recorded audio is too low.
     */
    AdmRecordAudioLowlevel = 1031,
    /**
     * Audio Device Module: the playback audio is too low.
     */
    AdmPlayoutAudioLowlevel = 1032,
    /**
     * Audio Device Module: The recording device is busy.
     */
    AdmRecordIsOccupied = 1033,
    /**
     * Audio Device Module: howling is detected.
     */
    ApmHowling = 1051,
    /**
     * Audio Device Module: the device is in the glitch state.
     */
    AdmGlitchState = 1052,
    /**
     * Audio Device Module: the underlying audio settings have changed.
     */
    AdmImproperSettings = 1053,
}

/**
 * The audio channel of the sound.
 * @enum {number}
 */
export enum AudioChannel {
    /**
     * (Default) Supports dual channels. Depends on the upstream of the broadcaster.
     */
    Channel0 = 0,
    /**
     * The audio stream of the broadcaster uses the FL audio channel. If the upstream of the broadcaster uses multiple audio channels, these channels will be mixed into mono first.
     */
    Channel1 = 1,
    /**
     * The audio stream of the broadcaster uses the FC audio channel. If the upstream of the broadcaster uses multiple audio channels, these channels will be mixed into mono first.
     */
    Channel2 = 2,
    /**
     * The audio stream of the broadcaster uses the FR audio channel. If the upstream of the broadcaster uses multiple audio channels, these channels will be mixed into mono first.
     */
    Channel3 = 3,
    /**
     * The audio stream of the broadcaster uses the BL audio channel. If the upstream of the broadcaster uses multiple audio channels, these channels will be mixed into mono first.
     */
    Channel4 = 4,
    /**
     * The audio stream of the broadcaster uses the BR audio channel. If the upstream of the broadcaster uses multiple audio channels, these channels will be mixed into mono first.
     */
    Channel5 = 5,
}

/**
 * Video codec types.
 * @enum {number}
 */
export enum VideoCodecType {
    /**
     * Standard VP8.
     */
    VP8 = 1,
    /**
     * Standard H264.
     */
    H264 = 2,
    /**
     * Enhanced VP8.
     */
    EVP = 3,
    /**
     * Enhanced H264.
     */
    E264 = 4,
}
