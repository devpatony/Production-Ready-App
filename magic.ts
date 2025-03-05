/* Additional Steps to Debug:
Check the client Import: Ensure that the client import from @/sanity/lib/client is correct and that the client object is properly configured.

Check the STARTUP_BY_ID_QUERY and PLAYLIST_BY_SLUG_QUERY: Ensure that these queries are correctly defined and return the expected data.

Check the View Component: Ensure that the View component is correctly implemented and does not cause any issues during rendering.

Check the formatDate Function: Ensure that the formatDate function from @/lib/utils is correctly implemented and does not cause any issues.

This command will list the process using port 3000 along with other connection details. You can use this information to identify and troubleshoot any issues related to the port usage.
Get-NetTCPConnection -LocalPort 3000 | Select-Object -Property OwningProcess, LocalAddress, LocalPort, RemoteAddress, RemotePort, State | Format-Table -AutoSize


To terminate the process using port 3000, you can follow these steps:

Identify the Process ID (PID): Use the following PowerShell command to find the process ID (PID) of the process using port 3000:
Get-NetTCPConnection -LocalPort 3000 | Select-Object -Property OwningProcess

Terminate the Process: Use the following PowerShell command to terminate the process using the PID obtained from the previous step. Replace <PID> with the actual PID:
Stop-Process -Id <PID> -Force


The hydration error occurs when the server-rendered HTML does not match the client-rendered HTML. This can happen due to various reasons, such as using non-deterministic values (e.g., Date.now(), Math.random()), conditional rendering based on window or other client-specific properties, or external data that changes between server and client rendering.

To fix this issue, you need to ensure that the server-rendered HTML matches the client-rendered HTML. Here are a few steps to troubleshoot and fix the issue:

Avoid Non-Deterministic Values: Ensure that you are not using non-deterministic values like Date.now() or Math.random() directly in the render method.

Check Conditional Rendering: Ensure that you are not using conditional rendering based on window or other client-specific properties directly in the render method.

Ensure Consistent Data: Ensure that the data fetched on the server is consistent with the data used on the client.

Use useEffect for Client-Side Effects: Use the useEffect hook for client-side effects that depend on window or other client-specific properties.

To address the hydration errors and ensure that the View component works correctly, we need to make sure that the server-rendered HTML matches the client-rendered HTML. Here are a few steps to troubleshoot and fix the issue:

Ensure Consistent Data: Make sure that the data fetched on the server is consistent with the data used on the client.

Avoid Non-Deterministic Values: Ensure that you are not using non-deterministic values like Date.now() or Math.random() directly in the render method.

Check Conditional Rendering: Ensure that you are not using conditional rendering based on window or other client-specific properties directly in the render method.

Use useEffect for Client-Side Effects: Use the useEffect hook for client-side effects that depend on window or other client-specific properties.

Instead, we can use the writeClient directly in the server component

Since the View component is a server component, we need to ensure that the data fetching and updating logic is handled correctly. Here is the updated View.tsx file: