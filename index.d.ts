declare module 'AAIIOSLivenessSDK' {
    export interface Config {
      enableCollect?: boolean;
      captureInterval?: number;
      maxNumber?: number;
      imageWidth?: number;
      imageQuality?: number;
    }
  
    export interface VideoRecorderConfig {
      enableRecord?: boolean;
      maxDuration?: number;
    }
  
    export interface SDKCallback {
      onCameraPermissionDenied?: (key: string, message: string) => void;
      onDetectionComplete?: (livenessId: string, img: string, additionalInfo: Record<string, any>) => void;
      onDetectionFailed?: (key: string, message: string, additionalInfo: any) => void;
      livenessViewBeginRequest?: () => void;
      livenessViewEndRequest?: () => void;
    }
  
    export interface DetectionInfo {
      key: string;
      message: string;
      state: string;
    }
  
    export interface DetectionCompleteInfo {
      livenessId: string;
      img: string;
      transactionId: string;
    }
  
    export default class AAIIOSLivenessSDK {
      static initSDKByLicense(market: string, isGlobalService: boolean): void;
      static initSDKByKey(accessKey: string, secretKey: string, market: string, isGlobalService: boolean): void;
      static setDetectOcclusion(detectOcclusion: boolean): void;
      static setResultPictureSize(pictureSize: number): void;
      static setActionTimeoutSeconds(actionTimeout: number): void;
      static setActionSequence(shuffle: boolean, actionSequence: string[]): void;
      static setDetectionLevel(level: number): void;
      static setAuditImageConfig(config: Config): void;
      static setVideoRecorderConfig(config: VideoRecorderConfig): void;
      static bindUser(userId: string): void;
      static setLicenseAndCheck(license: string, callback: (error: any) => void): void;
      static startLiveness(config: any, callback: SDKCallback): void;
      static sdkVersion(callback: (version: string) => void): void;
    }
  }
  