"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, FileSearch, Handshake, Menu, X } from "lucide-react"
import { motion, type Variants } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  // アニメーション設定（型定義を追加してエラーを修正）
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white selection:bg-[#D4AF37]/30">
      {/* 背景エフェクト (Ambient Light) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 w-[1000px] h-[500px] -translate-x-1/2 bg-[#D4AF37]/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-[#5E6AD2]/5 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0B0C0E]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-[#D4AF37]/50">
              <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              JLOS <span className="text-white/40 font-normal">Audit</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-white text-black hover:bg-white/90 font-medium" asChild>
              <Link href="https://m.me/61585310624472" target="_blank">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* 1. Hero Section (3D Animation) */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto max-w-7xl px-6 text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <Badge variant="outline" className="border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] hover:bg-[#D4AF37]/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Sparkles className="mr-2 h-3 w-3" />
              New Standard for Housing Security
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem] leading-[1.1]">
            Don&apos;t Sign <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Blindly.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl leading-relaxed">
            不動産契約の「見落とし」と「外国人価格」をプロが監査。
            <br />
            AIと専門家のダブルチェックで、あなたのサインを守ります。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 rounded-full bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold text-base shadow-[0_0_20px_-5px_#D4AF37]" asChild>
              <Link href="https://m.me/61585310624472" target="_blank">
                無料診断を始める <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10" asChild>
              <Link href="#process">
                仕組みを見る
              </Link>
            </Button>
          </motion.div>

          {/* 3D Floating Interface */}
          <motion.div 
            variants={fadeInUp}
            className="relative mt-20 mx-auto max-w-5xl"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="relative rounded-xl border border-white/10 bg-[#16181D] shadow-2xl"
              initial={{ rotateX: 20, y: 50, opacity: 0 }}
              animate={{ rotateX: 20, y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#5E6AD2]/20 blur-2xl opacity-50 -z-10" />
              
              {/* Mock UI Header */}
              <div className="flex items-center gap-4 border-b border-white/5 bg-white/[0.02] px-6 py-4 rounded-t-xl">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-black/50 px-3 py-1 text-xs text-white/40 border border-white/5 font-mono">
                  <ShieldCheck className="h-3 w-3" />
                  jlos-audit-system.v2.4.1
                </div>
              </div>

              {/* Mock UI Content */}
              <div className="p-6 md:p-10 grid gap-6 md:grid-cols-3 text-left">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Shinjuku Luxury Apt. Contract</h3>
                      <p className="text-sm text-white/40">ID: #8823-J • Updated 2m ago</p>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">High Risk Detected</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-sm text-white/80">特約条項：退去時クリーニング固定費</span>
                      </div>
                      <span className="text-sm font-mono text-red-400">¥88,000 (Over +30%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <span className="text-sm text-white/80">短期解約違約金（1年未満）</span>
                      </div>
                      <span className="text-sm font-mono text-yellow-400">2 Months Rent</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm text-white/80">保証会社利用料</span>
                      </div>
                      <span className="text-sm font-mono text-green-400">Safe (Standard)</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-black/40 border border-white/5 p-5 flex flex-col justify-center items-center text-center">
                  <div className="text-sm text-white/50 mb-2">Safety Score</div>
                  <div className="relative flex items-center justify-center h-24 w-24 rounded-full border-4 border-white/10 mb-4">
                    <span className="text-3xl font-bold text-yellow-500">45</span>
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="#EAB308" strokeWidth="8" strokeDasharray="280" strokeDashoffset="160" strokeLinecap="round" className="opacity-80" />
                    </svg>
                  </div>
                  <Button size="sm" className="w-full bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90">
                    Fix Risks
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 2. Features Grid (Bento) */}
        <section id="features" className="relative mt-32 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">Why JLOS?</h2>
              <p className="mt-4 text-white/50">感情ではなく、データとロジックであなたの利益を守ります。</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.07] transition-colors md:col-span-2">
                <CardHeader>
                  <FileSearch className="h-8 w-8 text-[#D4AF37] mb-4" />
                  <CardTitle className="text-white">AI × Pro Audit</CardTitle>
                  <CardDescription className="text-white/60">
                    契約書の写真を送るだけ。AIが条項をスキャンし、プロが市場価格と比較。
                    「高いか安いか」を信号機（赤・黄・青）で判定します。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 rounded-lg bg-gradient-to-br from-black/40 to-transparent border border-white/5 p-4 flex items-end">
                    <span className="font-mono text-xs text-[#D4AF37]">Scanning complete...</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.07] transition-colors">
                <CardHeader>
                  <Handshake className="h-8 w-8 text-[#D4AF37] mb-4" />
                  <CardTitle className="text-white">Certified Housing</CardTitle>
                  <CardDescription className="text-white/60">
                    審査落ちゼロへ。JLOSの監査をクリアした「安全な物件」だけを紹介するルートも用意。
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.07] transition-colors">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-[#D4AF37] mb-4" />
                  <CardTitle className="text-white">Zero Conflict</CardTitle>
                  <CardDescription className="text-white/60">
                    私たちはオーナー側から広告料をもらいません。100%あなたの味方として動きます。
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. Process Section */}
        <section id="process" className="relative mt-32 px-6">
          <div className="mx-auto max-w-6xl">
            <Card className="rounded-2xl border-white/10 bg-white/[0.03]">
              <CardHeader>
                <CardTitle className="text-xl text-white/90">How it works</CardTitle>
                <CardDescription className="text-white/60">
                  迷いを減らし、サイン前の判断を強くします。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-medium tracking-wider text-[#D4AF37]">STEP 01</div>
                  <div className="mt-2 text-sm font-semibold text-white/90">Share</div>
                  <div className="mt-2 text-sm text-white/60">
                    契約書（PDF/写真）と状況を共有。LINEやMessengerで送るだけ。
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-medium tracking-wider text-[#D4AF37]">STEP 02</div>
                  <div className="mt-2 text-sm font-semibold text-white/90">Audit</div>
                  <div className="mt-2 text-sm text-white/60">
                    AIとプロが分析。リスクと交渉ポイントを24時間以内に提示。
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-medium tracking-wider text-[#D4AF37]">STEP 03</div>
                  <div className="mt-2 text-sm font-semibold text-white/90">Decide</div>
                  <div className="mt-2 text-sm text-white/60">
                    必要なら専門家へ紹介、または監査結果をもとに自分で交渉。
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4. Pricing Section */}
        <section id="pricing" className="relative mt-32 mb-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-12">
              {/* Plans */}
              <Card className="md:col-span-7 rounded-2xl border-white/10 bg-white/[0.03]">
                <CardHeader>
                  <CardTitle className="text-xl text-white/90">Plans</CardTitle>
                  <CardDescription className="text-white/60">
                    まずは“監査”で不安を減らす。必要なら“紹介”へ。
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white/90">Audit</div>
                      <Badge className="border border-white/10 bg-white/5 text-white/70">Popular</Badge>
                    </div>
                    <div className="mt-2 text-sm text-white/60">
                      契約書を読み解き、危険点と交渉論点を整理
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/65">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" /> リスク一覧（優先度）
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" /> 交渉ポイント
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#D4AF37]/12 to-transparent p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white/90">Audit + Referral</div>
                      <Badge className="border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">Premium</Badge>
                    </div>
                    <div className="mt-2 text-sm text-white/60">
                      監査に加え、必要に応じて専門家へ接続
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/65">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" /> 監査アウトプット一式
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" /> 専門家・業者の紹介
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Get Started / Contact */}
              <Card id="contact" className="md:col-span-5 rounded-2xl border-white/10 bg-white/[0.03]">
                <CardHeader>
                  <CardTitle className="text-xl text-white/90">Get started</CardTitle>
                  <CardDescription className="text-white/60">
                    まずは状況をざっくりでOK。最短ルートを返します。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-medium text-white/85">What to send</div>
                    <div className="mt-2 text-sm text-white/60">
                      契約書（PDF/写真） / 物件種別 / 期限 / 不安点
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-[#D4AF37] text-black hover:bg-[#D4AF37]/95" asChild>
                    <Link href="https://m.me/61585310624472" target="_blank">
                      今すぐ相談する <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-white/45 text-center">
                    LINEまたはMessengerで対応します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0C0E]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5">
              <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
            </span>
            <span>
              © {new Date().getFullYear()} JLOS.{" "}
              <span className="text-white/45">Contract Audit Service.</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Plans</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}