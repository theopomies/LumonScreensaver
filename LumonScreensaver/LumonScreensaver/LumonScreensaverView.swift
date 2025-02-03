//
//  LumonView.swift
//  LumonScreensaver
//
//  Created by Théo Pomies on 03/02/2025.
//

import AVFoundation
import ScreenSaver
import SwiftUI

class LumonScreensaverView: ScreenSaverView {
  private let videoLayer = AVPlayerLayer()
  private var looper: AVPlayerLooper?
  
  override init?(frame: NSRect, isPreview: Bool) {
    super.init(frame: frame, isPreview: isPreview)
    commonInit()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    commonInit()
  }
  
  override func startAnimation() {
    super.startAnimation()
    videoLayer.player?.play()
  }
  
  override func stopAnimation() {
    super.stopAnimation()
    videoLayer.player?.pause()
  }
  
  private func commonInit() {
    animationTimeInterval = 1.0 / 50.0
    wantsLayer = true
        
    videoLayer.frame = bounds
    videoLayer.autoresizingMask = [.layerWidthSizable, .layerHeightSizable]
    videoLayer.masksToBounds = true
    videoLayer.needsDisplayOnBoundsChange = true
    videoLayer.contentsGravity = .resizeAspectFill
    videoLayer.backgroundColor = NSColor(red: 0.00, green: 0.01, blue: 0.00, alpha: 1.0).cgColor
    videoLayer.videoGravity = .resizeAspectFill
    videoLayer.masksToBounds = true
    
    layer = videoLayer
    
    let item = AVPlayerItem(url: Bundle(for: LumonScreensaverView.self).url(forResource: "LumonBounce", withExtension: "mp4")!)
    let player = AVQueuePlayer(playerItem: item)
    looper = AVPlayerLooper(player: player, templateItem: item)
    
    videoLayer.player = player
  }
}
