import { authInterceptor } from './auth.interceptor';
import { busyInterceptor } from './busy.interceptor';
import { csrfInterceptor } from './csrf.interceptor';
import { ensureSSLInterceptor } from './ensure-ssl.interceptor';
import { globalHeaders } from './global.headers';
import { logHeadersInterceptor } from './log-headers.interceptor';
import { logHttpInterceptor } from './log-http.interceptor';
import { readOnlyInterceptor } from './read-only.interceptor';
import { transformInterceptor } from './transform.interceptor';

export function applyHttpInterceptors() {
  globalHeaders();

  /**
   * The sequence is important.
   * Axios Interceptors are executed in the reverse order they are added.
   * Last in, first executed.
   */
  transformInterceptor();
  busyInterceptor();
  logHeadersInterceptor();
  csrfInterceptor();
  authInterceptor();
  ensureSSLInterceptor();
  readOnlyInterceptor();
  logHttpInterceptor();
}