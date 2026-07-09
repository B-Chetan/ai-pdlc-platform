'use client';

import React from 'react';
import { agents } from '@/data/agents';
import { tools } from '@/data/tools';
import { recentActivities, workflowStats } from '@/data/workflow';
import AgentCard from '@/components/Agents/AgentCard';
import ToolsSection from '@/components/Tools/ToolsSection';
import WorkflowDiagram from '@/components/Workflow/WorkflowDiagram';
import ArchitectureDiagram from '@/components/Workflow/ArchitectureDiagram';
import WorkflowStatus from '@/components/Dashboard/WorkflowStatus';
import RecentActivity from '@/components/Dashboard/RecentActivity';
import { Zap, Brain, Target, Rocket } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-blue to-accent-cyan"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-orange to-accent-blue text-white text-sm font-semibold animate-pulse">
              🚀 Next-Generation AI Platform
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Driven <span className="gradient-text">Product Development</span> Life Cycle
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Intelligent multi-agent system for autonomous orchestration of subsystem design, simulation, and review. Faster cycles, higher quality, better reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-orange to-accent-blue text-white font-bold hover:shadow-xl hover:shadow-accent-orange/50 transition-all transform hover:scale-105">
              Get Started Now
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-accent-blue text-accent-blue font-bold hover:bg-accent-blue/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose AI-PDLC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'Multi-Agent AI',
                description: '5 specialized agents working together intelligently',
                color: 'from-purple-600 to-purple-900',
              },
              {
                icon: Zap,
                title: 'Faster Cycles',
                description: 'Automated PDLC reduces time-to-market significantly',
                color: 'from-orange-600 to-orange-900',
              },
              {
                icon: Target,
                title: 'Compliance-First',
                description: 'Built-in safety and standards validation',
                color: 'from-blue-600 to-blue-900',
              },
              {
                icon: Rocket,
                title: 'Scalable',
                description: 'Handles complex engineering systems seamlessly',
                color: 'from-cyan-600 to-cyan-900',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${feature.color} rounded-lg p-6 text-white hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Dashboard Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <WorkflowStatus {...workflowStats} />
            </div>
            <div>
              <RecentActivity activities={recentActivities.slice(0, 3)} />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">PDLC Workflow</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Automated 5-stage process orchestrated by intelligent AI agents
          </p>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">AI Agents</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Meet the specialized agents orchestrating your design process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Integrated Tools</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Seamless integration with industry-leading simulation and analysis tools
          </p>
          
          <ToolsSection
            category="simulation"
            tools={tools}
            title="Simulation Tools"
            icon="🧪"
          />
          <ToolsSection
            category="review"
            tools={tools}
            title="Review & Analysis Tools"
            icon="🔍"
          />
          <ToolsSection
            category="orchestration"
            tools={tools}
            title="Orchestration Tools"
            icon="⚙️"
          />
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">System Architecture</h2>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Demo: Soil Moisture Sensor + Pump Controller</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Process Flow */}
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Workflow Process</h3>
              <div className="space-y-4">
                {[
                  {
                    stage: 1,
                    title: 'Requirement Agent',
                    desc: 'Moisture threshold detection < 30%',
                  },
                  {
                    stage: 2,
                    title: 'Design Agent',
                    desc: 'Circuit design with MCU logic',
                  },
                  {
                    stage: 3,
                    title: 'Simulation Agent',
                    desc: 'Test case: moisture < 30%',
                  },
                  {
                    stage: 4,
                    title: 'Review Agent',
                    desc: 'Flags risks, ensures standards',
                  },
                  {
                    stage: 5,
                    title: 'Orchestration Agent',
                    desc: 'Iterates until subsystem ready',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-slate-700/20 hover:bg-slate-700/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-orange to-accent-blue flex items-center justify-center text-white font-bold">
                      {item.stage}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Block Diagram */}
            <div className="glass-effect rounded-lg p-8 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Subsystem Block Diagram</h3>
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-lg p-4 text-white text-center font-semibold">
                    🌱 Soil Moisture Sensor
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-2xl text-accent-orange">↓</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg p-4 text-white text-center font-semibold">
                    🎛️ Controller (MCU)
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-2xl text-accent-orange">↓</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-gradient-to-r from-orange-600 to-orange-900 rounded-lg p-4 text-white text-center font-semibold">
                    💧 Pump
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-700/50 rounded-lg w-full">
                <p className="text-slate-300 text-sm text-center">
                  <span className="font-bold">Logic:</span> If (moisture &lt; threshold) then pump = ON; else pump = OFF;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-effect rounded-lg p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Product Development?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join the future of AI-driven engineering. Faster cycles, better designs, smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-orange to-accent-blue text-white font-bold hover:shadow-xl hover:shadow-accent-orange/50 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-accent-cyan text-accent-cyan font-bold hover:bg-accent-cyan/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
