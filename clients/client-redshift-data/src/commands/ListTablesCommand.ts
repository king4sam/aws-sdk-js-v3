import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListTablesRequest, ListTablesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTablesCommand,
  serializeAws_json1_1ListTablesCommand,
} from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

export interface ListTablesCommandInput extends ListTablesRequest {}
export interface ListTablesCommandOutput extends ListTablesResponse, __MetadataBearer {}

/**
 * <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then
 *        all tables in the database are returned.
 *       A token is returned to page through the table list.
 *       Depending on the authorization method, use one of the
 *       following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>Secrets Manager - specify the Amazon Resource Name (ARN) of the secret, the database name, and the
 *          cluster identifier that matches the cluster in the secret. </p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - specify the cluster identifier, the database name, and the
 *           database user name. Permission to call the <code>redshift:GetClusterCredentials</code>
 *           operation is required to use this method. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListTablesCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListTablesCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 */
export class ListTablesCommand extends $Command<
  ListTablesCommandInput,
  ListTablesCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTablesCommandInput, ListTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "ListTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTablesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTablesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTablesCommandOutput> {
    return deserializeAws_json1_1ListTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}