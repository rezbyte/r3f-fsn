uniform vec2 resolution;

void main() {
  vec2 position = gl_FragCoord.xy / resolution.xy;
  vec3 cyan = vec3(0.53, 0.97, 0.93);
  vec3 navy = vec3(0.01, 0.53, 0.84);
  gl_FragColor = vec4(mix(cyan, navy, position.y * 0.003), 1.0 );
}
