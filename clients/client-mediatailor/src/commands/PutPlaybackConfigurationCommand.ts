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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutPlaybackConfigurationRequest, PutPlaybackConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutPlaybackConfigurationCommand,
  serializeAws_restJson1PutPlaybackConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface PutPlaybackConfigurationCommandInput extends PutPlaybackConfigurationRequest {}
export interface PutPlaybackConfigurationCommandOutput extends PutPlaybackConfigurationResponse, __MetadataBearer {}

/**
 * <p>Adds a new playback configuration to AWS Elemental MediaTailor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new PutPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class PutPlaybackConfigurationCommand extends $Command<
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPlaybackConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPlaybackConfigurationCommandInput, PutPlaybackConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "PutPlaybackConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPlaybackConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPlaybackConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPlaybackConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutPlaybackConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPlaybackConfigurationCommandOutput> {
    return deserializeAws_restJson1PutPlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}