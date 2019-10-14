import PresetEnv from '@babel/preset-env';
import PresetReact from '@babel/preset-react';
import PluginProposalClassProperties from '@babel/plugin-proposal-class-properties';
import PluginTransformRuntime from '@babel/plugin-transform-runtime';
import PluginTransformReactConstantElements from '@babel/plugin-transform-react-constant-elements';
import PluginTransformReactInlineElements from '@babel/plugin-transform-react-inline-elements';

module.exports = () => ({
  presets: [PresetEnv, PresetReact],
  plugins: [PluginProposalClassProperties, PluginTransformRuntime],
  env: {
    production: {
      plugins: [
        PluginTransformReactConstantElements,
        PluginTransformReactInlineElements
      ]
    }
  }
});
