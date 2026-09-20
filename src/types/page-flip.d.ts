/// <reference lib="dom" />

declare module "page-flip" {
  export interface PageFlipOptions {
    width?: number;
    height?: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    usePortrait?: boolean;
    startPage?: number;
    autoSize?: boolean;
    maxAngle?: number;
    flippingTime?: number;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
  }

  export interface PageFlipPoint {
    x: number;
    y: number;
  }

  export interface PageFlipRect {
    left: number;
    top: number;
    width: number;
    height: number;
    pageWidth: number;
  }

  export class PageFlip {
    constructor(element: HTMLElement, options: PageFlipOptions);
    loadFromHTML(items: HTMLElement[] | ArrayLike<HTMLElement>): void;
    loadFromImages(images: string[]): void;
    destroy(): void;
    flip(pageIndex: number, corner?: "top" | "bottom"): void;
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    update(): void;
    getPageCount(): number;
    getCurrentPageIndex(): number;
    on(eventName: string, callback: (...args: unknown[]) => void): void;
    off(eventName: string): void;
    getUI(): { getDistElement(): HTMLElement };
    getRender(): { getRect(): PageFlipRect };
    getFlipController(): {
      fold(pos: PageFlipPoint): void;
      start(pos: PageFlipPoint): boolean;
      flip(pos: PageFlipPoint): void;
      flipPrev(corner?: "top" | "bottom"): void;
    };
    startUserTouch(pos: PageFlipPoint): void;
    userMove(pos: PageFlipPoint, isTouch: boolean): void;
    userStop(pos: PageFlipPoint, isSwipe?: boolean): void;
  }
}
